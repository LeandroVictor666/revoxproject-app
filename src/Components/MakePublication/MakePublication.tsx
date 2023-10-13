import { useSelector } from "react-redux";
import Styles from "../../Styles/app.module.css";
import { IReducerProps } from "../../Redux/Store";
import AccountService from "../../Services/Account.Service";
import PublicationController from "../../Controllers/Publication/PublicationController";
import { useState } from "react";
const MakePublicationComponent = (): JSX.Element => {
  const account = useSelector((state: IReducerProps) => state.accountAuth);
  const [content, setContent] = useState<string>("");
  if (account.isAuthenticated === false) return <></>;

  const accountService = new AccountService(account.accountDataObject);
  const publicationController = new PublicationController();
  const contentHandler = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(ev.target.value);
  };
  const inputHandler = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const jwtToken = account.JWT;
    if (jwtToken === null) {
      return;
    }
    try {
      await publicationController.publish(content, jwtToken);
      window.location.reload();
    } catch (err) {
      window.alert(
        `Failed to make publication. verify if you are authenticated.\nIf error persists, try to clean cache, and login again`
      );
    }
  };
  return (
    <div className={Styles.makePublicationContainer}>
      <header className={Styles.makePublicationHeader}>
        <img src={accountService.getPfpSrc()}></img>
        <p>{accountService.getUsername()}</p>
      </header>
      <div className={Styles.makePublicationBody}>
        <p>Want to share something today?</p>
        <form
          onSubmit={async (ev) => {
            await inputHandler(ev);
          }}
        >
          <textarea
            placeholder="Type something.."
            value={content}
            onChange={(ev) => {
              contentHandler(ev);
            }}
          ></textarea>
          <input type="submit" value="Publish!"></input>
        </form>
      </div>
    </div>
  );
};
export default MakePublicationComponent;
