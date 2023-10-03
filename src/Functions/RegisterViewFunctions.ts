import RegisterAccountDto from "../DTO/RegisterAccountDto";
import * as RegisterModule from "../Modules/Register.Module";
import ServerResponseDto from "../DTO/ServerResponseDto";
import { showModal } from "../Redux/Modal.Redux";
import InputValidationResponse from "../Types/InputValidationResponse";
import ModalProps from "../Types/ModalProps";
import ModalType from "../Types/ModalType.enum";
import { ViewsEnum } from "../Types/Views.enum";
import * as ReduxToolkit from "@reduxjs/toolkit";

export const changeRegisterBtnBorderColor = (newColor: string) => {
  const registerBtn = document.getElementById("register-btn");
  if (registerBtn !== null) {
    registerBtn.style.borderColor = newColor;
  }
};
export const callToRegisterFunction = async (
  accountData: RegisterAccountDto,
  dispatch: ReduxToolkit.Dispatch<ReduxToolkit.AnyAction>
) => {
  const registerController = new RegisterModule.Controller();
  changeRegisterBtnBorderColor("#fff");
  try {
    await registerController.registerUser(accountData).then((response) => {
      const responseResult = response as ServerResponseDto;
      if (responseResult.isError === true) {
        const payload: ModalProps = {
          actualPage: ViewsEnum.RegisterView,
          message: responseResult.response,
          title: "Register Failed",
          modalType: ModalType.Failure,
          isActive: true,
        };
        dispatch(showModal(payload));
      } else {
        const payload: ModalProps = {
          actualPage: ViewsEnum.RegisterView,
          message: responseResult.response,
          title: "Successfully registered",
          modalType: ModalType.Success,
          isActive: true,
        };
        dispatch(showModal(payload));
      }
    });
  } catch (error) {
    const errorCheck = error as ServerResponseDto | InputValidationResponse;
    if (errorCheck.responseFrom === "server") {
      const serverResponse = error as ServerResponseDto;
      const payload: ModalProps = {
        message: serverResponse.response,
        title: "Register Failed",
        modalType: ModalType.Failure,
        actualPage: ViewsEnum.RegisterView,
        isActive: true,
      };
      dispatch(showModal(payload));
    } else {
      const clientResponse = error as InputValidationResponse;
      if (clientResponse.reason !== undefined) {
        const payload: ModalProps = {
          message: clientResponse.reason,
          modalType: ModalType.Failure,
          title: "Register Failed",
          actualPage: ViewsEnum.RegisterView,
          isActive: true,
        };
        dispatch(showModal(payload));
      }
    }
  }
  changeRegisterBtnBorderColor("#000");
  return Promise.resolve();
};
