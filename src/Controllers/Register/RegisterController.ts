import * as RegisterModule from "../../Modules/Register.Module";
import RegisterInterface from "../../Interfaces/Register.Interface";
import ErrorMessagerService from "../../Services/ErrorMesseger.Service";
import InputEnums from "../../Types/InputEnums.enum";
import InputValidationResponse from "../../Types/InputValidationResponse";
import InputValidationResponseEnums from "../../Types/InputValidationErrorObject.enum";
import ServerResponseDto from "../../DTO/ServerResponseDto";
import RegisterAccountDto from "../../DTO/RegisterAccountDto";
import * as ClientEnviroment from "../../_ClientEnviroment/ClientEnviroment";

export default class RegisterController implements RegisterInterface {
  registerService = new RegisterModule.Service();
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

  validateBirthday(birthday: Date): InputValidationResponse {
    const validationResult = this.registerService.validateBirthday(birthday);
    if (validationResult.isValid !== true) {
      return this.errorMessegerService.dispatchInputValidationErrorMessage(
        InputEnums.Birthday,
        validationResult.errorCode
      );
    }
    return {
      isValid: true,
      errorCode: InputValidationResponseEnums.Success,
      responseFrom: "client",
    };
  }

  async registerUser(
    accountData: RegisterAccountDto
  ): Promise<ServerResponseDto | InputValidationResponse> {
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

    const birthdayValidationResult = this.validateBirthday(
      accountData.birthday
    );
    if (birthdayValidationResult.isValid !== true) {
      const response =
        this.errorMessegerService.dispatchInputValidationErrorMessage(
          InputEnums.Birthday,
          birthdayValidationResult.errorCode
        );
      return Promise.reject(response);
    }

    const configurations: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: accountData.username,
        nickname: accountData.nickname,
        email: accountData.email,
        password: accountData.password,
        birthday: accountData.birthday,
      }),
    };

    const registerResult = await fetch(
      `${ClientEnviroment.API_URL}register/register`,
      configurations
    )
      .then((res) => {
        if (res.status <= 199 || res.status >= 300) {
          return Promise.reject(res.json());
        }
        return res.json();
      })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });

    return Promise.resolve(registerResult as ServerResponseDto);
  }
}
