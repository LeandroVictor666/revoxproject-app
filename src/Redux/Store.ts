import * as ReduxToolkit from "@reduxjs/toolkit";
import ModalProps from "../Types/ModalProps";
import ModalRedux from "./Modal.Redux";
import AccountMenuRedux from "./AccountMenu.redux";
import AccountMenuProps from "../Types/AccountMenuProps";
import AccountAuthRedux from "./AccountAuth.redux";
import AuthenticationProps from "../Types/AuthenticationProps";

export interface IReducerProps {
  modal: ModalProps;
  accountMenu: AccountMenuProps;
  accountAuth: AuthenticationProps;
}

//if i wanna apply middlewares in the future
const appMiddleware: ReduxToolkit.Middleware =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (store) => (next) => (action) => {
    //add this to run 'npm run build'
    //console.log(store);

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
    accountMenu: AccountMenuRedux,
    accountAuth: AccountAuthRedux,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appMiddleware),
});

export default store;
