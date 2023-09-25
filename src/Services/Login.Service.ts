import * as AccountRules from "../Rules/AccountRules";
import LoginErrorIdEnum from "../Types/LoginServiceErrorId.e";
import LoginInputValidationObject from "../Types/LoginServiceValidation";

export default class LoginService {
  /**

   * @param {string} username - Username input to validate
   * @returns {LoginInputValidationObject} returns a object with details of failure/success validation
   */
  validateUsername(username: string): LoginInputValidationObject {
    if (username === "" || username === undefined) {
      return {
        isValid: false,
        errorCode: LoginErrorIdEnum.FailedInputIsEmpty,
        reason: "The user did not fill in the username field.",
      };
    } else if (username.length < AccountRules.USERNAME_MIN_LENGTH) {
      return {
        isValid: false,
        errorCode: LoginErrorIdEnum.FailedMinCharacters,
        reason:
          "The user did not fill a valid username field, Min Characters: ",
      };
    } else if (username.length > AccountRules.USERNAME_MAX_LENGTH) {
      return {
        isValid: false,
        errorCode: LoginErrorIdEnum.FailedMaxCharacters,
        reason:
          "The user did no fill a valid username field, Max CHaracters: 35",
      };
    }
    return {
      isValid: true,
      errorCode: LoginErrorIdEnum.Success,
    };
  }
  /**
   * @param {string} password - Password input to validate
   * @returns {LoginInputValidationObject} returns a object with details of failure/success validation
   */
  validatePassword(password: string): LoginInputValidationObject {
    if (password === "" || password === undefined) {
      return {
        isValid: false,
        errorCode: LoginErrorIdEnum.FailedInputIsEmpty,
        reason: "The user did not fill in the password field.",
      };
    } else if (password.length < AccountRules.PASSWORD_MIN_LENGTH) {
      return {
        isValid: false,
        errorCode: LoginErrorIdEnum.FailedMinCharacters,
        reason: `The user did not fill a valid password field, Min Characters: ${AccountRules.PASSWORD_MIN_LENGTH}`,
      };
    } else if (password.length > AccountRules.PASSWORD_MAX_LENGTH) {
      return {
        isValid: false,
        errorCode: LoginErrorIdEnum.FailedMaxCharacters,
        reason: `The user did no fill a valid password field, Max Characters: ${AccountRules.PASSWORD_MAX_LENGTH}`,
      };
    }

    const haveBlankSpaces = password.match(
      AccountRules.PASSWORD_BLANK_SPACE_REGEX
    );
    if (haveBlankSpaces) {
      return {
        isValid: false,
        errorCode: LoginErrorIdEnum.FailedInvalidInput,
        reason: "The password field can't have blank spaces.",
      };
    }

    const upperCaseResult = password.match(/[A-Z]/g);
    if (upperCaseResult === null || upperCaseResult === undefined) {
      return {
        isValid: false,
        errorCode: LoginErrorIdEnum.FailedMinUpperCase,
        reason: `The password field must have at least ${AccountRules.PASSWORD_MIN_UPPERCASE} uppercase letter.`,
      };
    }

    if (upperCaseResult?.length < AccountRules.PASSWORD_MIN_UPPERCASE) {
      return {
        isValid: false,
        errorCode: LoginErrorIdEnum.FailedMinUpperCase,
        reason: `The password field must have at least ${AccountRules.PASSWORD_MIN_UPPERCASE} uppercase letter.`,
      };
    }

    const passwordHaveDigits = password.match(
      AccountRules.PASSWORD_DIGIT_REGEX
    );

    if (
      !passwordHaveDigits ||
      passwordHaveDigits.length < AccountRules.PASSWORD_MIN_DIGITS
    ) {
      console.log(passwordHaveDigits?.length);
      return {
        isValid: false,
        errorCode: LoginErrorIdEnum.FailedMinDigits,
        reason: `The password field must have at least ${AccountRules.PASSWORD_MIN_DIGITS} number digits.`,
      };
    }

    return {
      isValid: true,
      errorCode: LoginErrorIdEnum.Success,
    };
  }
}
