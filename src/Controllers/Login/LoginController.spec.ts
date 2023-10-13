import LoginAccountDto from "../../DTO/LoginAccountDto";
import InputValidationResponseEnums from "../../Types/InputValidationErrorObject.enum";
import LoginController from "./LoginController";

describe("test login controller functions", () => {
  const loginController = new LoginController();
  it("should return a failed login. username/min characters", async () => {
    try {
      const accountDto = new LoginAccountDto("i", "mypassword");
      await loginController
        .loginUser(accountDto)
        .then((res) => {
          
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    } catch (error) {
      expect(error).toMatchObject({
        isValid: false,
        errorCode: InputValidationResponseEnums.FailedMinCharacters,
      });
    }
  });
  it("should return a failed login. password/invalid, errorCode: FailedMinUpperCase", async () => {
    try {
      const accountDto = new LoginAccountDto("LeandroVictor", "mypassword!@");
      await loginController
        .loginUser(accountDto)
        .then((res) => {
          
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    } catch (error) {
      expect(error).toMatchObject({
        isValid: false,
        errorCode: InputValidationResponseEnums.FailedMinUpperCase,
      });
    }
  });
});
