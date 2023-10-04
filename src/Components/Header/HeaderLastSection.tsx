import AccountDto from "../../DTO/AccountDto";
import Styles from "../../Styles/app.module.css";
import GearIcon from "../../assets/icons/GearIcon";
import HamburgMenu from "../../assets/icons/HamburgMenu";
const HeaderLastSection = (): JSX.Element => {
  const isAuthenticated = true;
  const myAccount: AccountDto = {
    id: 0,
    username: "leandro-victor-666",
    nickname: "Leandro Victor",
    email: "leandrovictordev@gmail.com",
    birthday: new Date(2004, 6, 14),
  };

  if (!isAuthenticated) {
    return (
      <div className={Styles.lastSection}>
        <nav>
          <a href="/login" id="login-btn">
            Login
          </a>
          <a href="/register" style={{ marginLeft: "16px" }}>
            Register
          </a>
        </nav>
      </div>
    );
  }
  return (
    <div className={Styles.lastSectionAuthenticated}>
      <a href={`profile/${myAccount.id}`}>
        <img
          src={`/Assets/UsersPfp/user-${myAccount.id}.jpeg`}
        ></img>
      </a>
      <HamburgMenu />
      <GearIcon />
    </div>
  );
};

export default HeaderLastSection;
