import InputValidationResponseEnums from "../../Types/InputValidationErrorObject.enum";
import RegisterController from "./RegisterController";
const registerController = new RegisterController();

describe("test register controller username validation", () => {
  it("should return a failed validation, errorCode: Min Characters.", () => {
    const validationResult = registerController.validateUsername("L");
    expect(validationResult.isValid).toBe(false);
    expect(validationResult.errorCode).toBe(
      InputValidationResponseEnums.FailedMinCharacters
    );
  });
});

describe("test register controller email validation", () => {
  it("should return a failed validation, errorCode: Invalid Email Input", () => {
    const validationResult = registerController.validateEmail(
      "leandrovictordev@invalidDigitcom"
    );
    expect(validationResult).toMatchObject({
      isValid: false,
      errorCode: InputValidationResponseEnums.FailedInvalidInput,
    });
  });
  it("should return a success validation (EMAIL)", () => {
    const validationResult = registerController.validateEmail(
      "leandrovictordev@gmail.com"
    );
    expect(validationResult).toMatchObject({
      isValid: true,
      errorCode: InputValidationResponseEnums.Success,
    });
  });
});

describe("test register controller password validation", () => {
  it("should return a failed validation, errorCode: FailedMinUpperCase", () => {
    const validationResult =
      registerController.validatePassword("mysecretpassword");
    expect(validationResult).toMatchObject({
      isValid: false,
      errorCode: InputValidationResponseEnums.FailedMinUpperCase,
    });
  });

  it("should return a failed validation, errorCode: FailedBlankSpaces", () => {
    const validationResult = registerController.validatePassword(
      "I N V A L I D P A S S W O R D E X A M P L E"
    );
    expect(validationResult).toMatchObject({
      isValid: false,
      errorCode: InputValidationResponseEnums.FailedNoBlankSpaces,
    });
  });
});

describe("test register controller birthday validation", () => {
  it("should return a birthday validation error, errorCode", () => {
    const invalidDate = new Date();
    const validationResult = registerController.validateBirthday(invalidDate);
    expect(validationResult).toMatchObject({
      errorCode: InputValidationResponseEnums.FailedMinYearDate,
      isValid: false,
      responseFrom: "client",
    });
  });

  it("should return a b irthday validation success", () => {
    const validDate = new Date(2004, 4, 14);
    const validationResult = registerController.validateBirthday(validDate);
    expect(validationResult).toMatchObject({
      isValid: true,
      errorCode: InputValidationResponseEnums.Success,
    });
  });
});
