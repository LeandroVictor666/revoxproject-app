import ModalType from "../Types/ModalType.enum";
import { ViewsEnum } from "./Views.enum";

type ModalProps = {
  modalType: ModalType;
  title: string;
  message: string;
  actualPage: ViewsEnum | null;
  isActive?: boolean;
};

export default ModalProps;
