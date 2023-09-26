import LoginService from "./Login.Service";
import LoginErrorIdEnum from "../Types/InputValidationErrorObject.enum";
import { faker } from "@faker-js/faker";
const fakeBigText = faker.lorem.paragraphs(35);

describe("Login Service Username Input Validation Method", () => {
  const loginService = new LoginService();

  it("should return a failed validation, errorcode: FailedInputIsEmpty", () => {
    const validationResult = loginService.validateUsername("");
    expect(validationResult.errorCode).toBe(
      LoginErrorIdEnum.FailedInputIsEmpty
    );
  });

  it("should return a failed validation, errorcode: FailedMinCharacters", () => {
    const validationResult = loginService.validateUsername("no");
    expect(validationResult.errorCode).toBe(
      LoginErrorIdEnum.FailedMinCharacters
    );
  });

  it("should return a failed validation, errorcode: FailedMaxCharacters", () => {
    const validationResult = loginService.validateUsername(fakeBigText);
    expect(validationResult.errorCode).toBe(
      LoginErrorIdEnum.FailedMaxCharacters
    );
  });

  it("should return a success validation.", () => {
    const validationResult =
      loginService.validateUsername("leandro-victor-666");
    expect(validationResult.isValid).toBe(true);
    expect(validationResult.errorCode).toBe(LoginErrorIdEnum.Success);
    expect(validationResult.reason).toBe(null || undefined);
  });

  it("should return a success validation, but with a random username", () => {
    const personName = `${faker.person.firstName()}-${faker.person.middleName()}`;

    const validationResult = loginService.validateUsername(personName);

    expect(validationResult.errorCode).toBe(LoginErrorIdEnum.Success);
    expect(validationResult.isValid).toBe(true);
    expect(validationResult.reason).toBe(null || undefined);
  });
});

describe("Login Service Password Input Validation Method", () => {
  const loginService = new LoginService();

  it("should return a failed validation, errorcode: FailedInputIsEmpty", () => {
    const validationResult = loginService.validatePassword("");
    expect(validationResult.errorCode).toBe(
      LoginErrorIdEnum.FailedInputIsEmpty
    );
  });

  it("should return a failed validation, errorcode: FailedMinCharacters", () => {
    const validationResult = loginService.validatePassword("no");
    expect(validationResult.errorCode).toBe(
      LoginErrorIdEnum.FailedMinCharacters
    );
  });

  it("should return a failed validation, errorcode: FailedMaxCharacters", () => {
    const validationResult = loginService.validatePassword(fakeBigText);
    expect(validationResult.errorCode).toBe(
      LoginErrorIdEnum.FailedMaxCharacters
    );
  });
  it("should return a failed validation, errorcode: FailedInvalidInput", () => {
    const passwordWBlankSpaces = "password With Blank Spaces!";

    const validationResult =
      loginService.validatePassword(passwordWBlankSpaces);
    expect(validationResult.errorCode).toBe(
      LoginErrorIdEnum.FailedInvalidInput
    );
  });

  it("should return a success validation.", () => {
    const userPasswordInput = "MYSECRETPASSWORD666";

    const validationResult = loginService.validatePassword(userPasswordInput);
    expect(validationResult.errorCode).toBe(LoginErrorIdEnum.Success);
    expect(validationResult.isValid).toBe(true);
    expect(validationResult.reason).toBe(null || undefined);
  });
});
