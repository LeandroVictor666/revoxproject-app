import * as LoginModule from "../Modules/Login.Module";
import LoginAccountDto from "../DTO/LoginAccountDto";

import { showModal } from "../Redux/Modal.Redux";
import ModalProps from "../Types/ModalProps";
import ModalType from "../Types/ModalType.enum";

import { ViewsEnum } from "../Types/Views.enum";
import * as ReduxToolkit from "@reduxjs/toolkit";
import ServerResponseDto from "../DTO/ServerResponseDto";

export const callToLoginFunction = async (
  loginDto: LoginAccountDto,
  dispatch: ReduxToolkit.Dispatch<ReduxToolkit.AnyAction>
) => {
  const loginController = new LoginModule.Controller();
  try {
    await loginController.loginUser(loginDto).then((res) => {
      console.log(`LoginRes: ${res}`);
      const response = res as ServerResponseDto;
      console.log(`LoginResponse: ${response}`);
      if (response.isError === true) {
        const payload: ModalProps = {
          actualPage: ViewsEnum.LoginView,
          message: response.response,
          title: "Login Failed",
          modalType: ModalType.Failure,
          isActive: true,
        };
        dispatch(showModal(payload));
        return;
      }
      const payload: ModalProps = {
        actualPage: ViewsEnum.LoginView,
        message: "Logged In Successfully",
        modalType: ModalType.Success,
        title: "Login",
        isActive: true,
      };
      dispatch(showModal(payload));
    });
  } catch (error) {
    console.log(`a error.. ${error}`);
  }
};
