import Styles from "../../Styles/app.module.css";
const PublicationOrn = (): JSX.Element => {
  return (
    <svg
      className={Styles.publicationOrn}
      xmlns="http://www.w3.org/2000/svg"
      width="352"
      height="31"
      viewBox="0 0 352 31"
      fill="none"
    >
      <path
        d="M1 30L44.75 1L88.5 30L132.25 1L176 30L219.75 1L263.5 30L307.25 1L351 30"
        stroke="black"
        strokeWidth={"0.8"}
      />
    </svg>
  );
};

export default PublicationOrn;
