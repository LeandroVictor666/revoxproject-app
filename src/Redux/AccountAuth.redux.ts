import * as ReduxToolkit from "@reduxjs/toolkit";
import AuthenticationProps from "../Types/AuthenticationProps";

const initialState: AuthenticationProps = {
  isAuthenticated: false,
  accountDataObject: {
    id: 0,
    username: "",
    nickname: "",
    email: "",
    isPfpSet: false,
    birthday: new Date(),
  },
  JWT: null,
};
interface actionProps {
  type: string;
  payload: AuthenticationProps;
}

const AccountAuthSlice = ReduxToolkit.createSlice({
  name: "AccountMenu",
  initialState: initialState,
  reducers: {
    changeAuth(state, action: actionProps) {
      state.accountDataObject = action.payload.accountDataObject;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.JWT = action.payload.JWT;
    },
  },
});

export const { changeAuth } = AccountAuthSlice.actions;
export default AccountAuthSlice.reducer;
