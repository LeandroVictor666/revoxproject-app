import Styles from "../../Styles/app.module.css";
import ModalAnimation from "./ModalAnimation";
import ModalType from "../../Types/ModalType.enum";
import { CSSProperties, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IReducerProps } from "../../Redux/Store";
import { hiddenModal } from "../../Redux/Modal.Redux";
import * as AnimationFunction from "../../Functions/AnimationFunctions";
import * as ClientEnviroment from "../../_ClientEnviroment/ClientEnviroment";

const ModalComponent = (): JSX.Element | undefined => {
  let cssProp: CSSProperties;

  const dispatch = useDispatch();
  const thisModal = useSelector((state: IReducerProps) => state.modal);
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (thisModal.isActive) {
      if (thisModal.actualPage !== null) {
        AnimationFunction.blurView(thisModal.actualPage);
      }
      timeoutId = setTimeout(() => {
        if (thisModal.actualPage !== null) {
          AnimationFunction.removeBlurView(thisModal.actualPage);
        }
        dispatch(hiddenModal());
      }, ClientEnviroment.ModalDelayToHidden);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [thisModal.isActive, dispatch]);

  switch (thisModal.modalType) {
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
  if (thisModal.isActive === true && thisModal.isActive !== undefined) {
    return (
      <div className={Styles.modalContainer} style={cssProp}>
        <header>
          <p>{thisModal.title}</p>
        </header>
        <div className={Styles.modalAnimationContainer}>
          <ModalAnimation modalType={thisModal.modalType} />
        </div>
        <div className={Styles.horizontalLine}></div>
        <div className={Styles.modalResponse}>
          <p>{thisModal.message}</p>
        </div>
      </div>
    );
  }
  return undefined;
};

export default ModalComponent;
