import * as EmailValidator from "email-validator";
import * as AccountRules from "../Rules/AccountRules";
import InputValidationErrorEnum from "../Types/InputValidationErrorObject.enum";
import InputValidationResponse from "../Types/InputValidationResponse";
//import MonthsEnum from "../Types/Months.enum";

export default class RegisterService {
  /**

   * @param {string} username - Username input to validate
   * @returns {InputValidationResponse} returns a object with details of failure/success validation
   */
  validateUsername(username: string): InputValidationResponse {
    if (username === "" || username === undefined) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedInputIsEmpty,
        reason: "The user did not fill in the username field.",
        responseFrom: "client",
      };
    } else if (username.length < AccountRules.USERNAME_MIN_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMinCharacters,
        reason: `The user did not fill a valid username field, Min Characters: ${AccountRules.USERNAME_MIN_LENGTH}`,
        responseFrom: "client",
      };
    } else if (username.length > AccountRules.USERNAME_MAX_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMaxCharacters,
        reason: `The user did no fill a valid username field, Max CHaracters: ${AccountRules.USERNAME_MAX_LENGTH}`,
        responseFrom: "client",
      };
    }
    return {
      isValid: true,
      errorCode: InputValidationErrorEnum.Success,
      responseFrom: "client",
    };
  }

  validateNickname(nickname: string): InputValidationResponse {
    if (nickname === "" || nickname === undefined) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedInputIsEmpty,
        reason: "The user did not fill in the nickname field",
        responseFrom: "client",
      };
    } else if (nickname.length < AccountRules.NICKNAME_MIN_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMinCharacters,
        reason: `The user did not fill in the nickname field correctly, minimum number of characters: ${AccountRules.NICKNAME_MIN_LENGTH}`,
        responseFrom: "client",
      };
    } else if (nickname.length > AccountRules.NICKNAME_MAX_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMaxCharacters,
        reason: `The user did not fill in the nickname field correctly, minimum number of characters: ${AccountRules.NICKNAME_MAX_LENGTH}`,
        responseFrom: "client",
      };
    } else if (
      nickname.match(AccountRules.NICKNAME_INVALID_CHAR_REGEX) !== null
    ) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedInvalidInput,
        reason: "The user did not fill a valid nickname field.",
        responseFrom: "client",
      };
    }

    return {
      isValid: true,
      errorCode: InputValidationErrorEnum.Success,
      responseFrom: "client",
    };
  }

  validateEmail(email: string): InputValidationResponse {
    if (email === "" || email === undefined) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedInputIsEmpty,
        reason: "The user did not fill in the email field.",
        responseFrom: "client",
      };
    } else if (email.length < AccountRules.EMAIL_MIN_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMinCharacters,
        reason: `The user did not fill a valid email, Min Characters: ${AccountRules.EMAIL_MIN_LENGTH}`,
        responseFrom: "client",
      };
    } else if (email.length > AccountRules.EMAIL_MAX_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMaxCharacters,
        reason: `The user did not fill a valid email, Max Characters: ${AccountRules.EMAIL_MAX_LENGTH}`,
        responseFrom: "client",
      };
    } else if (EmailValidator.validate(email) === false) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedInvalidInput,
        reason: `The user did not fill a valid email`,
        responseFrom: "client",
      };
    }

    return {
      isValid: true,
      errorCode: InputValidationErrorEnum.Success,
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
        errorCode: InputValidationErrorEnum.FailedInputIsEmpty,
        reason: "The user did not fill in the password field.",
        responseFrom: "client",
      };
    } else if (password.length < AccountRules.PASSWORD_MIN_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMinCharacters,
        reason: `The user did not fill a valid password field, Min Characters: ${AccountRules.PASSWORD_MIN_LENGTH}`,
        responseFrom: "client",
      };
    } else if (password.length > AccountRules.PASSWORD_MAX_LENGTH) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMaxCharacters,
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
        errorCode: InputValidationErrorEnum.FailedNoBlankSpaces,
        reason: "The password field can't have blank spaces.",
        responseFrom: "client",
      };
    }

    const upperCaseResult = password.match(/[A-Z]/g);
    if (upperCaseResult === null || upperCaseResult === undefined) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMinUpperCase,
        reason: `The password field must have at least ${AccountRules.PASSWORD_MIN_UPPERCASE} uppercase letter.`,
        responseFrom: "client",
      };
    }

    if (upperCaseResult?.length < AccountRules.PASSWORD_MIN_UPPERCASE) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMinUpperCase,
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
        errorCode: InputValidationErrorEnum.FailedMinDigits,
        reason: `The password field must have at least ${AccountRules.PASSWORD_MIN_DIGITS} number digits.`,
        responseFrom: "client",
      };
    }

    return {
      isValid: true,
      errorCode: InputValidationErrorEnum.Success,
      responseFrom: "client",
    };
  }

  validateBirthday(birthday: Date): InputValidationResponse {
    const date18yAgo = new Date();
    date18yAgo.setFullYear(date18yAgo.getFullYear() - 18);
    const year = birthday.getFullYear();
    const month = birthday.getMonth();
    const day = birthday.getDate();

    if (day > AccountRules.BIRTHDAY_MAX_DAY) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMaxDay,
        reason: `The user entered the day of birth incorrectly, max day: ${AccountRules.BIRTHDAY_MAX_DAY}`,
        responseFrom: "client",
      };
    } else if (day < AccountRules.BIRTHDAY_MIN_DAY) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMinDay,
        reason: "The user entered a invalid day.",
        responseFrom: `client`,
      };
    } else if (year > AccountRules.BIRTHDAY_ACTUAL_YEAR) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMaxYearDate,
        reason: "The user entered a year greater than the current year.",
        responseFrom: "client",
      };
    } else if (month > 12) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedInvalidMonth,
        reason: "The user entered a invalid month.",
        responseFrom: `client`,
      };
    } else if (birthday > date18yAgo) {
      return {
        isValid: false,
        errorCode: InputValidationErrorEnum.FailedMinYearDate,
        reason: "The user is not over 18 years old.",
        responseFrom: "client",
      };
    }

    return {
      isValid: true,
      errorCode: InputValidationErrorEnum.Success,
      responseFrom: "client",
    };
  }
}
