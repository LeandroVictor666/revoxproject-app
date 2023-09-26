import { faker } from "@faker-js/faker";
import InputValidationResponseEnums from "../../Types/InputValidationErrorObject.enum";
import RegisterController from "./RegisterController";
const loremParagraphs = faker.lorem.paragraph(15);

describe("test register controller username validation", () => {
  const registerController = new RegisterController();
  it("should return a failed validation, errorCode: Min Characters.", () => {
    const validationResult = registerController.validateUsername("L");
    expect(validationResult.isValid).toBe(false);
    expect(validationResult.errorCode).toBe(
      InputValidationResponseEnums.FailedMinCharacters
    );
  });
  it("should return a failed validation, errorCode: Max Characters.", () => {
    const validationResult =
      registerController.validateUsername(loremParagraphs);
    expect(validationResult.isValid).toBe(false);
    expect(validationResult.errorCode).toBe(
      InputValidationResponseEnums.FailedMaxCharacters
    );
  });
});

describe("test register controller nickname validation", () => {
  const registerController = new RegisterController();
  it("should return a failed validation, errorCode: Min Characters.", () => {
    const validationResult = registerController.validateNickname("L");
    expect(validationResult.isValid).toBe(false);
    expect(validationResult.errorCode).toBe(
      InputValidationResponseEnums.FailedMinCharacters
    );
  });
  it("should return a failed validation, errorCode: Max Characters.", () => {
    const validationResult =
      registerController.validateNickname(loremParagraphs);
    expect(validationResult.isValid).toBe(false);
    expect(validationResult.errorCode).toBe(
      InputValidationResponseEnums.FailedMaxCharacters
    );
  });
});

describe("test register controller email validation", () => {
  const registerController = new RegisterController();
  it("should return a failed validation, errorCode: Min Characters.", () => {
    const validationResult = registerController.validateEmail("L");
    expect(validationResult.isValid).toBe(false);
    expect(validationResult.errorCode).toBe(
      InputValidationResponseEnums.FailedMinCharacters
    );
  });
  it("should return a failed validation, errorCode: Max Characters.", () => {
    const validationResult = registerController.validateEmail(loremParagraphs);
    expect(validationResult.isValid).toBe(false);
    expect(validationResult.errorCode).toBe(
      InputValidationResponseEnums.FailedMaxCharacters
    );
  });
  it("should return a failed validation, errorCode: Invalid (email) Input", () => {
    const validationResult = registerController.validateEmail(
      "invalidEMail@idontknown"
    );
    expect(validationResult.isValid).toBe(false);
    expect(validationResult.errorCode).toBe(
      InputValidationResponseEnums.FailedInvalidInput
    );
  });
});

describe("test register controller password validation", () => {
  const registerController = new RegisterController();
  it("should return a failed validation, errorCode: Min Characters.", () => {
    const validationResult = registerController.validatePassword("1"); /*  */
    expect(validationResult.isValid).toBe(false);
    expect(validationResult.errorCode).toBe(
      InputValidationResponseEnums.FailedMinCharacters
    );
  });
  it("should return a failed validation, errorCode: Max Character", () => {
    const validationResult =
      registerController.validatePassword(loremParagraphs);
    expect(validationResult.isValid).toBe(false);
    expect(validationResult.errorCode).toBe(
      InputValidationResponseEnums.FailedMaxCharacters
    );
  });
});
