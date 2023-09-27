import ModalType from "../../Types/ModalType.enum";
import Styles from "../../Styles/app.module.css";

const ModalAnimation = ({
  modalType,
}: {
  modalType: ModalType;
}): JSX.Element => {
  switch (modalType) {
    case ModalType.Failure: {
      return (
        <section className={Styles.c_container}>
          <div
            className={`${Styles.o_circle} ${Styles.c_container__circle} ${Styles.o_circle__sign__failure}`}
          >
            <div className={Styles.o_circle__sign}></div>
          </div>
        </section>
      );
    }
    default: {
      return (
        <section className={Styles.c_container}>
          <div
            className={`${Styles.o_circle} ${Styles.c_container__circle} ${Styles.o_circle__sign__success}`}
          >
            <div className={Styles.o_circle__sign}></div>
          </div>
        </section>
      );
    }
  }
};

export default ModalAnimation;
