import Styles from "../../Styles/app.module.css";

const HorizontalLine = ({ idName }: { idName?: string }): JSX.Element => {
  return <div className={Styles.horizontalLine} id={idName}></div>;
};

export default HorizontalLine;
