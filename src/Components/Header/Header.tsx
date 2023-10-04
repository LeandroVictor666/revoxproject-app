import Styles from "../../Styles/app.module.css";
import AccountMenu from "../AccountMenu/AccountMenu";
import HeaderLastSection from "./HeaderLastSection";

const Header = (): JSX.Element => {
  return (
    <>
      <header className={Styles.pageHeader}>
        <div className={Styles.containerFixer}>
          <div className={Styles.firstSection}>
            <p>RevoXProject</p>
          </div>
          <HeaderLastSection />
        </div>
      </header>
      <AccountMenu />
    </>
  );
};

export default Header;
