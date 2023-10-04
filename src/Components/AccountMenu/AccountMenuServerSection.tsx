import Styles from "../../Styles/app.module.css";
import CloudIcon from "../../assets/icons/CloudIcon";
const AccountMenuServerSection = (): JSX.Element => {
  return (
    <section
      className={`${Styles.myAccountBody} ${Styles.myAccountServerSection}`}
    >
      <nav>
        <a href="/server-status">
          <div className={Styles.nodeSection} style={{ marginTop: "0px" }}>
            <CloudIcon />
            <p>Server Status</p>
          </div>
        </a>
      </nav>
    </section>
  );
};
export default AccountMenuServerSection;
