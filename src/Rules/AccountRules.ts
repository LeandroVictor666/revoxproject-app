export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 35;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 255;
export const PASSWORD_MIN_UPPERCASE = 1;
export const PASSWORD_MIN_DIGITS = 3;
export const PASSWORD_BLANK_SPACE_REGEX = /[ \t]+/g;
export const PASSWORD_DIGIT_REGEX = /[0-9]/g;

// PASSWORD_VALIDATOR.is()
//   .has()
//   .digits(
//     PASSWORD_MIN_DIGITS,
//     `The user did no fill a valid password field, At least ${PASSWORD_MIN_DIGITS} number digits`
//   );
// PASSWORD_VALIDATOR.is()
//   .has()
//   .not()
//   .spaces(
//     undefined,
//     "The user did no fill a valid password field, the password cannot contain blanks spaces"
//   );
