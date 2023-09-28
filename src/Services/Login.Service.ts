import * as AccountRules from "../Rules/AccountRules";
import InputValidationResponseEnum from "../Types/InputValidationErrorObject.enum";
import InputValidationResponse from "../Types/InputValidationResponse";

export default class LoginService {
  /**

   * @param {string} username - Username input to validate
   * @returns {InputValidationResponse} returns a object with details of failure/success validation
   */
  validateUsername(username: string): InputValidationResponse {
    if (username === "" || username === undefined) {
      return {
        isValid: false,
        errorCode: InputValidationResponseEnum.FailedInputIsEmpty,
        reason: "The user did not fill in the username field.",
        responseFrom: "client",
      };
    } else if (username.length < AccountRules.USERNAME_MIN_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationResponseEnum.FailedMinCharacters,
        reason:
          "The user did not fill a valid username field, Min Characters: ",
        responseFrom: "client",
      };
    } else if (username.length > AccountRules.USERNAME_MAX_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationResponseEnum.FailedMaxCharacters,
        reason:
          "The user did no fill a valid username field, Max CHaracters: 35",
        responseFrom: "client",
      };
    }
    return {
      isValid: true,
      errorCode: InputValidationResponseEnum.Success,
      responseFrom: "client",
    };
  }
  /**
   * @param {string} password - Password input to validate
   * @returns {InputValidationResponse} returns a object with details of failure/success validation
   */
  validatePassword(password: string): InputValidationResponse {
    if (password === "" || password === undefined) {
      return {
        isValid: false,
        errorCode: InputValidationResponseEnum.FailedInputIsEmpty,
        reason: "The user did not fill in the password field.",
        responseFrom: "client",
      };
    } else if (password.length < AccountRules.PASSWORD_MIN_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationResponseEnum.FailedMinCharacters,
        reason: `The user did not fill a valid password field, Min Characters: ${AccountRules.PASSWORD_MIN_LENGTH}`,
        responseFrom: "client",
      };
    } else if (password.length > AccountRules.PASSWORD_MAX_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationResponseEnum.FailedMaxCharacters,
        reason: `The user did no fill a valid password field, Max Characters: ${AccountRules.PASSWORD_MAX_LENGTH}`,
        responseFrom: "client",
      };
    }

    const haveBlankSpaces = password.match(
      AccountRules.PASSWORD_BLANK_SPACE_REGEX
    );
    if (haveBlankSpaces) {
      return {
        isValid: false,
        errorCode: InputValidationResponseEnum.FailedInvalidInput,
        reason: "The password field can't have blank spaces.",
        responseFrom: "client",
      };
    }

    const upperCaseResult = password.match(/[A-Z]/g);
    if (upperCaseResult === null || upperCaseResult === undefined) {
      return {
        isValid: false,
        errorCode: InputValidationResponseEnum.FailedMinUpperCase,
        reason: `The password field must have at least ${AccountRules.PASSWORD_MIN_UPPERCASE} uppercase letter.`,
        responseFrom: "client",
      };
    }

    if (upperCaseResult?.length < AccountRules.PASSWORD_MIN_UPPERCASE) {
      return {
        isValid: false,
        errorCode: InputValidationResponseEnum.FailedMinUpperCase,
        reason: `The password field must have at least ${AccountRules.PASSWORD_MIN_UPPERCASE} uppercase letter.`,
        responseFrom: "client",
      };
    }

    const passwordHaveDigits = password.match(
      AccountRules.PASSWORD_DIGIT_REGEX
    );

    if (
      !passwordHaveDigits ||
      passwordHaveDigits.length < AccountRules.PASSWORD_MIN_DIGITS
    ) {
      return {
        isValid: false,
        errorCode: InputValidationResponseEnum.FailedMinDigits,
        reason: `The password field must have at least ${AccountRules.PASSWORD_MIN_DIGITS} number digits.`,
        responseFrom: "client",
      };
    }

    return {
      isValid: true,
      errorCode: InputValidationResponseEnum.Success,
      responseFrom: "client",
    };
  }
}
