import { useSelector } from "react-redux";
import Styles from "../../Styles/app.module.css";
import { IReducerProps } from "../../Redux/Store";
import AccountService from "../../Services/Account.Service";
const MakePublicationComponent = (): JSX.Element => {
  const account = useSelector((state: IReducerProps) => state.accountAuth);
  const accountService = new AccountService(account.accountDataObject);
  if (account.isAuthenticated === false) return <></>;

  return (
    <div className={Styles.makePublicationContainer}>
      <header className={Styles.makePublicationHeader}>
        <img src={accountService.getPfpSrc()}></img>
        <p>{accountService.getUsername()}</p>
      </header>
      <div className={Styles.makePublicationBody}>
        <p>Want to share something today?</p>
        <form>
          <textarea placeholder="Type something.."></textarea>
          <input type="submit" value="Publish!"></input>
        </form>
      </div>
    </div>
  );
};
export default MakePublicationComponent;
