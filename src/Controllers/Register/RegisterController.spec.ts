import { faker } from "@faker-js/faker";
import InputValidationResponseEnums from "../../Types/InputValidationErrorObject.enum";
import RegisterController from "./RegisterController";
import RegisterAccountDto from "../../DTO/RegisterAccountDto";
//import ServerResponseDto from "../../DTO/ServerResponseDto";

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

describe("test register controller registerFunction", () => {
  const registerController = new RegisterController();
  it("should return a error with", async () => {
    const accountData: RegisterAccountDto = new RegisterAccountDto(
      "a",
      "leandro-victor-666",
      "leandrovictordev@gmail.com",
      "MYSECRETPASSWORD666",
      14,
      "July",
      2004
    );
    try {
      await registerController
        .registerUser(accountData)
        .then((res) => {
          return Promise.resolve(res);
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    } catch (err) {
      expect(err).toMatchObject({
        isError: true,
        responseType: 1,
      });
    }
  });
});
