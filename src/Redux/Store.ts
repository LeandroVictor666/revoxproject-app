import * as ReduxToolkit from "@reduxjs/toolkit";
import ModalProps from "../Types/ModalProps";
import ModalRedux from "./Modal.Redux";

export interface IReducerProps {
  modal: ModalProps;
}

//if i wanna apply middlewares in the future
const appMiddleware: ReduxToolkit.Middleware =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (store) => (next) => (action) => {
    switch (action.type) {
      case "modal/showModal": {
        return next(action);
      }
      case "modal/hiddenModal": {
        return next(action);
      }
      default: {
        return next(action);
      }
    }
  };

const store = ReduxToolkit.configureStore({
  reducer: {
    modal: ModalRedux,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appMiddleware),
});

export default store;
