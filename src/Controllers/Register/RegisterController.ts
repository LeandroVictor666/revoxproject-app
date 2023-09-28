import RegisterInterface from "../../Interfaces/Register.Interface";
import ErrorMessagerService from "../../Services/ErrorMesseger.Service";
import RegisterService from "../../Services/Register.Service";
import InputEnums from "../../Types/InputEnums.enum";
import InputValidationResponse from "../../Types/InputValidationResponse";
import InputValidationResponseEnums from "../../Types/InputValidationErrorObject.enum";
import ServerResponseDto from "../../DTO/ServerResponseDto";
import RegisterAccountDto from "../../DTO/RegisterAccountDto";
import ServerErrorsEnum from "../../Types/ServerErrors.enum";

export default class RegisterController implements RegisterInterface {
  registerService = new RegisterService();
  errorMessegerService = new ErrorMessagerService();
  validateUsername(username: string): InputValidationResponse {
    const validationResult = this.registerService.validateUsername(username);
    if (validationResult.isValid !== true) {
      return this.errorMessegerService.dispatchInputValidationErrorMessage(
        InputEnums.Username,
        validationResult.errorCode
      );
    }
    return {
      isValid: true,
      errorCode: InputValidationResponseEnums.Success,
      responseFrom: "client",
    };
  }
  validateNickname(nickname: string): InputValidationResponse {
    const validationResult = this.registerService.validateNickname(nickname);
    if (validationResult.isValid !== true) {
      return this.errorMessegerService.dispatchInputValidationErrorMessage(
        InputEnums.Nickname,
        validationResult.errorCode
      );
    }
    return {
      isValid: true,
      errorCode: InputValidationResponseEnums.Success,
      responseFrom: "client",
    };
  }
  validateEmail(email: string): InputValidationResponse {
    const validationResult = this.registerService.validateEmail(email);
    if (validationResult.isValid !== true) {
      return this.errorMessegerService.dispatchInputValidationErrorMessage(
        InputEnums.Email,
        validationResult.errorCode
      );
    }

    return {
      isValid: true,
      errorCode: InputValidationResponseEnums.Success,
      responseFrom: "client",
    };
  }
  validatePassword(password: string): InputValidationResponse {
    const validationResult = this.registerService.validatePassword(password);
    if (validationResult.isValid !== true) {
      return this.errorMessegerService.dispatchInputValidationErrorMessage(
        InputEnums.Password,
        validationResult.errorCode
      );
    }

    return {
      isValid: true,
      errorCode: InputValidationResponseEnums.Success,
      responseFrom: "client",
    };
  }

  private async fakeAPIDelay(delay: number = 2500): Promise<boolean> {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  async registerUser(
    accountData: RegisterAccountDto
  ): Promise<ServerResponseDto | InputValidationResponse> {
    await this.fakeAPIDelay();
    const usernameValidationResult = this.validateUsername(
      accountData.username
    );
    if (usernameValidationResult.isValid === false) {
      const response =
        this.errorMessegerService.dispatchInputValidationErrorMessage(
          InputEnums.Username,
          usernameValidationResult.errorCode
        );
      return Promise.reject(response);
    }
    const nicknameValidationResult = this.validateNickname(
      accountData.nickname
    );
    if (nicknameValidationResult.isValid !== true) {
      const response =
        this.errorMessegerService.dispatchInputValidationErrorMessage(
          InputEnums.Nickname,
          nicknameValidationResult.errorCode
        );
      return Promise.reject(response);
    }

    const emailValidationResult = this.validateEmail(accountData.email);
    if (emailValidationResult.isValid !== true) {
      const response =
        this.errorMessegerService.dispatchInputValidationErrorMessage(
          InputEnums.Email,
          emailValidationResult.errorCode
        );
      return Promise.reject(response);
    }

    const passwordValidationResult = this.validatePassword(
      accountData.password
    );
    if (passwordValidationResult.isValid !== true) {
      const response =
        this.errorMessegerService.dispatchInputValidationErrorMessage(
          InputEnums.Password,
          passwordValidationResult.errorCode
        );
      return Promise.reject(response);
    }

    const responseObject: ServerResponseDto = {
      isError: false,
      response: "",
      responseFrom: "server",
      responseType: ServerErrorsEnum.Success,
    };

    return Promise.resolve(responseObject);
  }
}
