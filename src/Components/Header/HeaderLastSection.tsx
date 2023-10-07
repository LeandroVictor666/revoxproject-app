import { useSelector } from "react-redux";
import AccountDto from "../../DTO/AccountDto";
import Styles from "../../Styles/app.module.css";
import GearIcon from "../../assets/icons/GearIcon";
import HamburgMenu from "../../assets/icons/HamburgMenu";
import { IReducerProps } from "../../Redux/Store";
import AccountService from "../../Services/Account.Service";
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
    isPfpSet: authState.accountDataObject.isPfpSet,
    birthday: authState.accountDataObject.birthday,
  };
  const accountService = new AccountService(myAccount);
  return (
    <div className={Styles.lastSectionAuthenticated}>
      <a href={`profile/${myAccount.id}`}>
        <img src={accountService.getPfpSrc()}></img>
      </a>
      <HamburgMenu />
      <GearIcon />
    </div>
  );
};

export default HeaderLastSection;
