import LoginController from "../Controllers/Login/LoginController";
import LoginAccountDto from "../DTO/LoginAccountDto";

export const callToRegisterFunction = async (
  username: string,
  password: string
) => {
  const loginDto = new LoginAccountDto(username, password);
  const loginController = new LoginController();
  await loginController
    .loginUser(loginDto)
    .then((response) => {
      console.log(`response: ${response}`);
    })
    .catch((error) => {
      console.log(`error: ${error}`);
    });
};
