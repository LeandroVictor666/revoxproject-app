import { useSelector } from "react-redux";
import AccountDto from "../../DTO/AccountDto";
import Styles from "../../Styles/app.module.css";
import GearIcon from "../../assets/icons/GearIcon";
import HamburgMenu from "../../assets/icons/HamburgMenu";
import { IReducerProps } from "../../Redux/Store";
const HeaderLastSection = (): JSX.Element => {
  const authState = useSelector((state: IReducerProps) => state.accountAuth);
  if (!authState.isAuthenticated) {
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

  const myAccount: AccountDto = {
    id: authState.accountDataObject.id,
    username: authState.accountDataObject.username,
    nickname: authState.accountDataObject.nickname,
    email: authState.accountDataObject.email,
    birthday: authState.accountDataObject.birthday,
  };
  return (
    <div className={Styles.lastSectionAuthenticated}>
      <a href={`profile/${myAccount.id}`}>
        <img
          src={`/Assets/UsersPfp/user-${myAccount.id}.jpeg`}
          srcSet="/Assets/UsersPfp/default.jpeg"
        ></img>
      </a>
      <HamburgMenu />
      <GearIcon />
    </div>
  );
};

export default HeaderLastSection;
