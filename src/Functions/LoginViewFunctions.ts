import * as LoginModule from "../Modules/Login.Module";
import LoginAccountDto from "../DTO/LoginAccountDto";

import { showModal } from "../Redux/Modal.Redux";
import ModalProps from "../Types/ModalProps";
import ModalType from "../Types/ModalType.enum";

import { ViewsEnum } from "../Types/Views.enum";
import * as ReduxToolkit from "@reduxjs/toolkit";

export const callToRegisterFunction = async (
  loginDto: LoginAccountDto,
  dispatch: ReduxToolkit.Dispatch<ReduxToolkit.AnyAction>
) => {
  const loginController = new LoginModule.Controller();
  await loginController
    .loginUser(loginDto)
    .then(() => {
      const payload: ModalProps = {
        actualPage: ViewsEnum.LoginView,
        message: "Logged In Successfully",
        modalType: ModalType.Success,
        title: "Login",
        isActive: true,
      };
      dispatch(showModal(payload));
    })
    .catch((error) => {
      let message;
      if (error.responseFrom === "server") {
        message = error.response;
      } else {
        message = error.reason;
      }

      const payload: ModalProps = {
        actualPage: ViewsEnum.LoginView,
        message: message,
        modalType: ModalType.Failure,
        title: "Login",
        isActive: true,
      };
      dispatch(showModal(payload));
    });
};
