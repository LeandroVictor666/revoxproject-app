import * as ReduxToolkit from "@reduxjs/toolkit";
import AuthenticationProps from "../Types/AuthenticationProps";

const initialState: AuthenticationProps = {
  isAuthenticated: false,
  accountDataObject: null,
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
    },
  },
});

export const { changeAuth } = AccountAuthSlice.actions;
export default AccountAuthSlice.reducer;
