import LoginAccountDto from "../../DTO/LoginAccountDto";
import ServerResponseDto from "../../DTO/ServerResponseDto";
import ErrorMessagerService from "../../Services/ErrorMesseger.Service";
import * as LoginModule from "../../Modules/Login.Module";
import InputEnums from "../../Types/InputEnums.enum";
import InputValidationResponse from "../../Types/InputValidationResponse";
import ServerErrorsEnum from "../../Types/ServerErrors.enum";

export default class LoginController {
  private loginService = new LoginModule.Service();
  private messegerService = new ErrorMessagerService();

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

    const promiseObject: ServerResponseDto = {
      isError: false,
      response: `user: ${loginAccountDto.password}`,
      responseType: ServerErrorsEnum.Success,
      responseFrom: "server",
    };
    return Promise.resolve(promiseObject);
  }
}
