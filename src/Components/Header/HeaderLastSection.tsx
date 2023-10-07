import { useDispatch, useSelector } from "react-redux";
import Styles from "../../Styles/app.module.css";
import GearIcon from "../../assets/icons/GearIcon";
import HamburgMenu from "../../assets/icons/HamburgMenu";
import { IReducerProps } from "../../Redux/Store";
import AccountService from "../../Services/Account.Service";
import { fireAccountMenu } from "../../Redux/AccountMenu.redux";
const HeaderLastSection = (): JSX.Element => {
  const authState = useSelector((state: IReducerProps) => state.accountAuth);
  const dispatcher = useDispatch();
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
  const fireAccountMenuEvent = () => {
    dispatcher(fireAccountMenu());
  };
  const accountService = new AccountService(authState.accountDataObject);
  return (
    <div className={Styles.lastSectionAuthenticated}>
      <a href={`profile/${authState.accountDataObject.id}`}>
        <img src={accountService.getPfpSrc()} alt="User profile picture"></img>
      </a>
      <div
        onClick={() => {
          fireAccountMenuEvent();
        }}
      >
        <HamburgMenu />
      </div>
      <GearIcon />
    </div>
  );
};

export default HeaderLastSection;
