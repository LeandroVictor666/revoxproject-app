import Styles from "../../Styles/app.module.css";
import LogoutIcon from "../../assets/icons/LogoutIcon";
export const AccountMenuLastSection = (): JSX.Element => {
  return (
    <section
      className={`${Styles.myAccountBody} ${Styles.myAccountLastSection}`}
    >
      <nav>
        <a href="logout">
          <div className={Styles.nodeSection} style={{ marginTop: "0px" }}>
            <LogoutIcon />
            <p>Logout</p>
          </div>
        </a>
      </nav>
    </section>
  );
};
