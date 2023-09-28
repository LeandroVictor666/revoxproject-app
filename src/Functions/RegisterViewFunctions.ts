import RegisterController from "../Controllers/Register/RegisterController";
import RegisterAccountDto from "../DTO/RegisterAccountDto";
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
  const registerController = new RegisterController();
  changeRegisterBtnBorderColor("#fff");
  await registerController
    .registerUser(accountData)
    .then((resp) => {
      const responseObject = resp as ServerResponseDto;
      const payload: ModalProps = {
        actualPage: ViewsEnum.RegisterView,
        message: responseObject.response,
        title: "Successfully registered",
        modalType: ModalType.Success,
        isActive: true,
      };
      dispatch(showModal(payload));
    })
    .catch((err) => {
      if (err.isValid !== undefined) {
        const errorObject = err as InputValidationResponse;
        if (errorObject.reason !== undefined) {
          const payload: ModalProps = {
            message: errorObject.reason,
            modalType: ModalType.Failure,
            title: "Register Failed",
            isActive: true,
            actualPage: ViewsEnum.RegisterView,
          };
          dispatch(showModal(payload));
        }
      } else {
        const errorObject = err as ServerResponseDto;
        const payload: ModalProps = {
          message: errorObject.response,
          title: "Register Failed",
          modalType: ModalType.Failure,
          actualPage: ViewsEnum.RegisterView,
        };
        dispatch(showModal(payload));
      }
    });
  changeRegisterBtnBorderColor("#000");
};
