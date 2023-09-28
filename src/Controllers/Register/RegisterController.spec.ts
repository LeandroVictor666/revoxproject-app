//import { faker } from "@faker-js/faker";
import InputValidationResponseEnums from "../../Types/InputValidationErrorObject.enum";
import RegisterController from "./RegisterController";
import RegisterAccountDto from "../../DTO/RegisterAccountDto";
import InputValidationResponse from "../../Types/InputValidationResponse";
//import ServerResponseDto from "../../DTO/ServerResponseDto";

//const loremParagraphs = faker.lorem.paragraph(15);

describe("test register controller username validation", () => {
  const registerController = new RegisterController();
  it("should return a failed validation, errorCode: Min Characters.", () => {
    const validationResult = registerController.validateUsername("L");
    expect(validationResult.isValid).toBe(false);
    expect(validationResult.errorCode).toBe(
      InputValidationResponseEnums.FailedMinCharacters
    );
  });
});

describe("test register controller email validation", () => {
  const registerController = new RegisterController();
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
  const registerController = new RegisterController();
  it("should return a failed validation, errorCode: FailedMinUpperCase", () => {
    const validationResult =
      registerController.validatePassword("mysecretpassword");
    expect(validationResult).toMatchObject({
      isValid: false,
      errorCode: InputValidationResponseEnums.FailedMinUpperCase,
    });
  });

  it("should return a failed validation, errorCode: FailedBlankSpaces", () => {
    const validationResult =
      registerController.validatePassword("I N V A L I D P A S S W O R D E X A M P L E");
    expect(validationResult).toMatchObject({
      isValid: false,
      errorCode: InputValidationResponseEnums.FailedNoBlankSpaces,
    });
  });
});

describe("test register controller registerFunction", () => {
  const registerController = new RegisterController();
  it("should return a username validation error, errorCode: failed min length", async () => {
    const accountData: RegisterAccountDto = new RegisterAccountDto(
      "a",
      "leandro-victor-666",
      "leandrovictordev@gmail.com",
      "MYSECRETPASSWORD666",
      14,
      "July",
      2004
    );
    const expectedObject: InputValidationResponse = {
      errorCode: InputValidationResponseEnums.FailedMinCharacters,
      isValid: false,
    };

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
      expect(err).toMatchObject(expectedObject);
    }
  });
});
