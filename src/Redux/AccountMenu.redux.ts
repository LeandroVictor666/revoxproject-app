import * as ReduxToolkit from "@reduxjs/toolkit";
import AccountMenuProps from "../Types/AccountMenuProps";

const initialState: AccountMenuProps = {
  isActive: false,
};
// interface actionProps {
//   type: string;
//   payload: AccountMenuProps;
// }

const AccountMenuSlice = ReduxToolkit.createSlice({
  name: "AccountMenu",
  initialState: initialState,
  reducers: {
    fireAccountMenu(state) {
      state.isActive = !state.isActive;
    },
  },
});

export const { fireAccountMenu } = AccountMenuSlice.actions;
export default AccountMenuSlice.reducer;
