import Styles from "../../Styles/app.module.css";
const AccountMenuHeader = (): JSX.Element => {
  return (
    <header>
      <img
        className={Styles.accountMenuPfp}
        src="/Assets/UsersPfp/user-0.jpeg"
      ></img>
      <div className={Styles.miniAboutMe}>
        <p id={Styles.headerNickname}>Leandro Victor</p>
        <p id={Styles.headerUsername}>leandro-victor-666</p>
      </div>
    </header>
  );
};

export default AccountMenuHeader;
