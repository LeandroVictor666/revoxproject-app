import LoginAccountDto from "../../DTO/LoginAccountDto";
import ServerResponseDto from "../../DTO/ServerResponseDto";
import ErrorMessagerService from "../../Services/ErrorMesseger.Service";
import * as LoginModule from "../../Modules/Login.Module";
import InputEnums from "../../Types/InputEnums.enum";
import InputValidationResponse from "../../Types/InputValidationResponse";
import ResponseStatus from "../../Types/ServerErrors.enum";
import * as clientEnviroment from "../../_ClientEnviroment/ClientEnviroment";
import CacheService from "../../Services/Cache.Service";

export default class LoginController {
  private loginService = new LoginModule.Service();
  private messegerService = new ErrorMessagerService();
  private cacheService = new CacheService();

  validateUsername(username: string): InputValidationResponse {
    const validationResult = this.loginService.validateUsername(username);

    return this.messegerService.dispatchInputValidationErrorMessage(
      InputEnums.Username,
      validationResult.errorCode
    );
  }

  validatePassword(password: string): InputValidationResponse {
    const validationResult = this.loginService.validatePassword(password);
    return this.messegerService.dispatchInputValidationErrorMessage(
      InputEnums.Password,
      validationResult.errorCode
    );
  }

  async loginUser(
    loginAccountDto: LoginAccountDto
  ): Promise<ServerResponseDto | InputValidationResponse> {
    const usernameValidation = this.validateUsername(loginAccountDto.username);
    if (usernameValidation.isValid === false) {
      return Promise.reject(
        this.messegerService.dispatchInputValidationErrorMessage(
          InputEnums.Username,
          usernameValidation.errorCode
        )
      );
    }

    const passwordValidation = this.validatePassword(loginAccountDto.password);
    if (passwordValidation.isValid === false) {
      return Promise.reject(
        this.messegerService.dispatchInputValidationErrorMessage(
          InputEnums.Password,
          passwordValidation.errorCode
        )
      );
    }
    const configurations: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginAccountDto.username,
        password: loginAccountDto.password,
      }),
    };
    let isToReject = false;
    await fetch(
      `${clientEnviroment.API_URL}authentication/login`,
      configurations
    )
      .then((res) => {
        if (res.status <= 199 || res.status >= 299) {
          isToReject = true;
        }
        return res.json();
      })
      .then((response) => {
        if (isToReject === true) {
          const promiseResponse: ServerResponseDto = {
            isError: true,
            response: response.response,
            responseFrom: response.responseFrom,
            responseStatus: response.responseStatus,
          };
          return Promise.resolve(promiseResponse);
        }
        this.cacheService.saveDataInSessionStorage(
          "jwt_token",
          response.response
        );
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
    const promiseObject: ServerResponseDto = {
      isError: false,
      response: `user: ${loginAccountDto.password}`,
      responseStatus: ResponseStatus.Success,
      responseFrom: "server",
    };
    return Promise.resolve(promiseObject);
  }
}
