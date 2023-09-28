import InputEnums from "../Types/InputEnums.enum";
import InputValidationResponseEnums from "../Types/InputValidationErrorObject.enum";
import InputValidationResponse from "../Types/InputValidationResponse";
import * as ClientEnviroment from "../_ClientEnviroment/ClientEnviroment";
import * as AccountRules from "../Rules/AccountRules";

/**
 * This class is responsible for sending the message to the client based on the browser language.
 */
export default class ErrorMessagerService {
  dispatchInputValidationErrorMessage(
    inputWithError: InputEnums,
    errorType: InputValidationResponseEnums
  ): InputValidationResponse {
    switch (ClientEnviroment.Language) {
      default: {
        switch (inputWithError) {
          case InputEnums.Username: {
            switch (errorType) {
              case InputValidationResponseEnums.FailedInputIsEmpty: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please fill in the 'Username' field",
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMinCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the 'Username' field correctly, the min number of characters is: ${AccountRules.USERNAME_MIN_LENGTH}`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMaxCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the 'Username' field correctly, the max number of characters is: ${AccountRules.USERNAME_MAX_LENGTH}`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedInvalidInput: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill a valid Username, the following special characters are not valid: [@, ?, %, ', ",]`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.Success: {
                return {
                  isValid: true,
                  errorCode: errorType,
                  reason: "Success",
                  responseFrom: "client",
                };
              }
            }
            break;
          }
          case InputEnums.Nickname: {
            switch (errorType) {
              case InputValidationResponseEnums.FailedInputIsEmpty: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please fill in the 'Nickname' field",
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMinCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Nickname field correctly, the min number of characters is: ${AccountRules.NICKNAME_MIN_LENGTH}`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMaxCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Nickname field correctly, the max number of characters is: ${AccountRules.NICKNAME_MAX_LENGTH}`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedInvalidInput: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill a valid Nickname, the following special characters are not valid: [@, ?, %, ', ",]`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.Success: {
                return {
                  isValid: true,
                  errorCode: errorType,
                  reason: "Success",
                  responseFrom: "client",
                };
              }
            }
            break;
          }
          case InputEnums.Email: {
            switch (errorType) {
              case InputValidationResponseEnums.FailedInputIsEmpty: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please fill in the 'Email' field",
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMinCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Email field correctly, the min number of characters is: ${AccountRules.EMAIL_MIN_LENGTH}`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMaxCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Nickname field correctly, the max number of characters is: ${AccountRules.EMAIL_MAX_LENGTH}`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedInvalidInput: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill a valid email.`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.Success: {
                return {
                  isValid: true,
                  errorCode: errorType,
                  reason: "Success",
                  responseFrom: "client",
                };
              }
            }
            break;
          }
          case InputEnums.Password: {
            switch (errorType) {
              case InputValidationResponseEnums.FailedInputIsEmpty: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please fill in the 'Password' field",
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMinCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Password field correctly, the min number of characters is: ${AccountRules.PASSWORD_MIN_LENGTH}`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMaxCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Password field correctly, the max number of characters is: ${AccountRules.PASSWORD_MAX_LENGTH}`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMinUpperCase: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Password field correctly, The password requires at least ${AccountRules.PASSWORD_MIN_UPPERCASE} uppercase letter.`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedNoBlankSpaces: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Password field correctly, The password can't have blank spaces.`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMinDigits: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill a valid password, the password field must contain at least ${
                    AccountRules.PASSWORD_MIN_DIGITS
                  } digit${AccountRules.PASSWORD_MIN_DIGITS > 1 ? "s" : ""}.`,
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedInvalidInput: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please fill a valid password",
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.Success: {
                return {
                  isValid: true,
                  errorCode: errorType,
                  reason: "Success",
                  responseFrom: "client",
                };
              }
            }
            break;
          }
          case InputEnums.Birthday: {
            switch (errorType) {
              case InputValidationResponseEnums.FailedMinDay: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please, insert a valid day in birthday.",
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMaxDay: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please, insert a valid day in birthday.",
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMinYearDate: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason:
                    "To register/use our website/services you must be of legal age.",
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedMaxYearDate: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please, insert a valid year in birthday.",
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.FailedInvalidMonth: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please, insert a valid month in birthday",
                  responseFrom: "client",
                };
              }
              case InputValidationResponseEnums.Success: {
                return {
                  isValid: true,
                  errorCode: errorType,
                  reason: "Success",
                  responseFrom: "client",
                };
              }
            }
            break;
          }
        }
        break;
      }
    }

    return {
      errorCode: InputValidationResponseEnums.Failed,
      isValid: false,
      reason: "An internal error has occurred.",
      responseFrom: "client",
    };
  }
}
