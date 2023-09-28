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
                };
              }
              case InputValidationResponseEnums.FailedMinCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the 'Username' field correctly, the min number of characters is: ${AccountRules.USERNAME_MIN_LENGTH}`,
                };
              }
              case InputValidationResponseEnums.FailedMaxCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the 'Username' field correctly, the max number of characters is: ${AccountRules.USERNAME_MAX_LENGTH}`,
                };
              }
              case InputValidationResponseEnums.FailedInvalidInput: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill a valid Username, the following special characters are not valid: [@, ?, %, ', ",]`,
                };
              }
              case InputValidationResponseEnums.Success: {
                return {
                  isValid: true,
                  errorCode: errorType,
                  reason: "Success",
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
                };
              }
              case InputValidationResponseEnums.FailedMinCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Nickname field correctly, the min number of characters is: ${AccountRules.NICKNAME_MIN_LENGTH}`,
                };
              }
              case InputValidationResponseEnums.FailedMaxCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Nickname field correctly, the max number of characters is: ${AccountRules.NICKNAME_MAX_LENGTH}`,
                };
              }
              case InputValidationResponseEnums.FailedInvalidInput: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill a valid Nickname, the following special characters are not valid: [@, ?, %, ', ",]`,
                };
              }
              case InputValidationResponseEnums.Success: {
                return {
                  isValid: true,
                  errorCode: errorType,
                  reason: "Success",
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
                };
              }
              case InputValidationResponseEnums.FailedMinCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Email field correctly, the min number of characters is: ${AccountRules.EMAIL_MIN_LENGTH}`,
                };
              }
              case InputValidationResponseEnums.FailedMaxCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Nickname field correctly, the max number of characters is: ${AccountRules.EMAIL_MAX_LENGTH}`,
                };
              }
              case InputValidationResponseEnums.FailedInvalidInput: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill a valid email.`,
                };
              }
              case InputValidationResponseEnums.Success: {
                return {
                  isValid: true,
                  errorCode: errorType,
                  reason: "Success",
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
                };
              }
              case InputValidationResponseEnums.FailedMinCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Password field correctly, the min number of characters is: ${AccountRules.PASSWORD_MIN_LENGTH}`,
                };
              }
              case InputValidationResponseEnums.FailedMaxCharacters: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Password field correctly, the max number of characters is: ${AccountRules.PASSWORD_MAX_LENGTH}`,
                };
              }
              case InputValidationResponseEnums.FailedMinUpperCase: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Password field correctly, The password requires at least ${AccountRules.PASSWORD_MIN_UPPERCASE} uppercase letter.`,
                };
              }
              case InputValidationResponseEnums.FailedNoBlankSpaces: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill in the Password field correctly, The password can't have blank spaces.`,
                };
              }
              case InputValidationResponseEnums.FailedMinDigits: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: `Please fill a valid password, the password field must contain at least ${
                    AccountRules.PASSWORD_MIN_DIGITS
                  } digit${AccountRules.PASSWORD_MIN_DIGITS > 1 ? "s" : ""}.`,
                };
              }
              case InputValidationResponseEnums.FailedInvalidInput: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please fill a valid password",
                };
              }
              case InputValidationResponseEnums.Success: {
                return {
                  isValid: true,
                  errorCode: errorType,
                  reason: "Success",
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
                };
              }
              case InputValidationResponseEnums.FailedMaxDay: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please, insert a valid day in birthday.",
                };
              }
              case InputValidationResponseEnums.FailedMinYearDate: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason:
                    "To register/use our website/services you must be of legal age.",
                };
              }
              case InputValidationResponseEnums.FailedMaxYearDate: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please, insert a valid year in birthday.",
                };
              }
              case InputValidationResponseEnums.FailedInvalidMonth: {
                return {
                  isValid: false,
                  errorCode: errorType,
                  reason: "Please, insert a valid month in birthday",
                };
              }
              case InputValidationResponseEnums.Success: {
                return {
                  isValid: true,
                  errorCode: errorType,
                  reason: "Success",
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
    };
  }
}
