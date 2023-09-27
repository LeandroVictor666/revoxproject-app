import { ModalProps } from "../../Types/ModalProps";
import Styles from "../../Styles/app.module.css";
import ModalAnimation from "./ModalAnimation";
import ModalType from "../../Types/ModalType.enum";
import { CSSProperties } from "react";

const ModalComponent = ({ modalProps }: { modalProps: ModalProps }) => {
  let cssProp: CSSProperties;
  switch (modalProps.modalType) {
    case ModalType.Success: {
      cssProp = {
        boxShadow: "0px 8px 8px 0px rgb(56, 209, 51)",
      };
      break;
    }
    case ModalType.Failure: {
      cssProp = {
        boxShadow: "0px 8px 8px 0px rgb(209, 51, 51)",
      };
      break;
    }
    case ModalType.Warning: {
      cssProp = {
        boxShadow: "0px 8px 8px 0px rgb(206, 209, 51)",
      };
      break;
    }
  }

  return (
    <div className={Styles.modalContainer} style={cssProp}>
      <header>
        <p>{modalProps.title}</p>
      </header>
      <div className={Styles.modalAnimationContainer}>
        <ModalAnimation modalType={modalProps.modalType} />
      </div>
      <div className={Styles.horizontalLine}></div>
      <div className={Styles.modalResponse}>
        <p>{modalProps.message}</p>
      </div>
    </div>
  );
};

export default ModalComponent;
