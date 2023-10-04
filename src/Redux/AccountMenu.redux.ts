import * as ReduxToolkit from "@reduxjs/toolkit";
import AccountMenuProps from "../Types/AccountMenuProps";

const initialState: AccountMenuProps = {
  isActive: true,
};
// interface actionProps {
//   type: string;
//   payload: AccountMenuProps;
// }

const AccountMenuSlice = ReduxToolkit.createSlice({
  name: "AccountMenu",
  initialState: initialState,
  reducers: {
    showAccountMenu(state) {
      state.isActive = true;
    },
    hiddenAccountMenu(state) {
      state.isActive = false;
    },
  },
});

export const { showAccountMenu } = AccountMenuSlice.actions;
export default AccountMenuSlice.reducer;
