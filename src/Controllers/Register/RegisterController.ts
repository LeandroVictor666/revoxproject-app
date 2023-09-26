import RegisterInterface from "../../Interfaces/Register.Interface";
import ErrorMessagerService from "../../Services/ErrorMesseger.Service";
import RegisterService from "../../Services/Register.Service";
import InputEnums from "../../Types/InputEnums.enum";
import InputValidationResponse from "../../Types/InputValidationResponse";
import InputValidationResponseEnums from "../../Types/InputValidationErrorObject.enum";

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
}
