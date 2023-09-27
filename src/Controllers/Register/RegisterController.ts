import RegisterInterface from "../../Interfaces/Register.Interface";
import ErrorMessagerService from "../../Services/ErrorMesseger.Service";
import RegisterService from "../../Services/Register.Service";
import InputEnums from "../../Types/InputEnums.enum";
import InputValidationResponse from "../../Types/InputValidationResponse";
import InputValidationResponseEnums from "../../Types/InputValidationErrorObject.enum";
//import axios from "axios";
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
    };
  }
  async registerUser(
    accountData: RegisterAccountDto
  ): Promise<ServerResponseDto> {
    const validationResult = this.validateUsername(accountData.username);
    if (validationResult.isValid === false) {
      const resultResponse: ServerResponseDto = {
        isError: true,
        response: this.errorMessegerService.dispatchInputValidationErrorMessage(
          InputEnums.Username,
          validationResult.errorCode
        ).reason,
        responseType: ServerErrorsEnum.ClientInputError,
      };
      return Promise.reject(resultResponse);
    }



    return Promise.resolve({
      isError: false,
      response: "validated-test.",
      responseType: ServerErrorsEnum.Success,
    });
  }
}
