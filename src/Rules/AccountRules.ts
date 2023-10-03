export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 35;

export const NICKNAME_MIN_LENGTH = 4;
export const NICKNAME_MAX_LENGTH = 80;
export const NICKNAME_INVALID_CHAR_REGEX = /[¨@?%''""]/g;

export const EMAIL_MIN_LENGTH = 4;
export const EMAIL_MAX_LENGTH = 254;

export const BIRTHDAY_MIN_DAY = 1;
export const BIRTHDAY_MAX_DAY = 31;
export const BIRTHDAY_ACTUAL_YEAR = new Date().getFullYear();
export const BIRTHDAY_MIN_YEAR = BIRTHDAY_ACTUAL_YEAR - 18;
export const BIRTHDAY_MAX_YEAR = 1953;

export const PASSWORD_MIN_LENGTH = 4;
export const PASSWORD_MAX_LENGTH = 255;
export const PASSWORD_MIN_UPPERCASE = 1;
export const PASSWORD_MIN_DIGITS = 3;
export const PASSWORD_BLANK_SPACE_REGEX = /[ \t]+/g;
export const PASSWORD_DIGIT_REGEX = /[0-9]/g;
