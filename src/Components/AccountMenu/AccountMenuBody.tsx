import VCardPersonIcon from "../../assets/icons/VCardPerson";
import ChatDotIcon from "../../assets/icons/ChatDotIcon";
import PersonArmsUpIcon from "../../assets/icons/PersonArmsUpIcon";
import Styles from "../../Styles/app.module.css";
const AccountMenuBody = (): JSX.Element => {
  return (
    <section className={Styles.myAccountBody}>
      <nav>
        <a href="/profile/0">
          <div className={Styles.nodeSection} style={{ marginTop: "0px" }}>
            <VCardPersonIcon />
            <p>My Profile</p>
          </div>
        </a>
        <a href="/chat">
          <div className={Styles.nodeSection}>
            <ChatDotIcon />
            <p>RevoChat</p>
          </div>
        </a>
        <a href="/friends">
          <div className={Styles.nodeSection}>
            <PersonArmsUpIcon />
            <p>RevoFriends</p>
          </div>
        </a>
      </nav>
    </section>
  );
};

export default AccountMenuBody;
