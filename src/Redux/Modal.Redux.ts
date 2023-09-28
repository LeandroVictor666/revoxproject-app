import ModalProps from "../Types/ModalProps";
import ModalType from "../Types/ModalType.enum";
import * as ReduxToolkit from "@reduxjs/toolkit";

const initialState: ModalProps = {
  title: "NULL_TITLE",
  message: "NULL_MESSAGE",
  modalType: ModalType.Success,
  isActive: false,
  actualPage: null,
};

interface actionProps {
  type: string;
  payload: ModalProps;
}

const ModalSlice = ReduxToolkit.createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    showModal(state, action: actionProps) {
      state.title = action.payload.title;
      state.modalType = action.payload.modalType;
      state.message = action.payload.message;
      state.isActive = action.payload.isActive;
      state.actualPage = action.payload.actualPage;
    },
    hiddenModal() {
      return {
        ...initialState,
      };
    },
  },
});

export const { showModal, hiddenModal } = ModalSlice.actions;
export default ModalSlice.reducer;
