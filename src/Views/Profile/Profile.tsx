import { useParams } from "react-router-dom";
import ProfileDto from "../../DTO/ProfileDto";
import Styles from "../../Styles/app.module.css";
import DiscordIcon from "../../assets/icons/DiscordIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
const ProfileView = (): JSX.Element => {
  const { profileId } = useParams();
  console.log(typeof profileId);
  const fakeProfileRetrievedByApi: ProfileDto = {
    id: 0,
    username: "leandro-victor-666",
    nickname: "Leandro Victor",
    biography: "Meu nome é Leandro, eu sou um desenvolvedor fullstack.",
    location: "Pernambuco, Recife",
    socialMedias: {
      discord: {
        has: true,
        id: "LeandroVictor666",
        isPrivate: false,
      },
      github: {
        has: true,
        id: "leandro-victor-666",
        isPrivate: false,
      },
    },
  };

  return (
    <main className={Styles.profilePageMain}>
      <div className={Styles.profileViewContainer}>
        <header>
          <img
            src={`../Assets/UsersPfp/user-${fakeProfileRetrievedByApi.id}.jpeg`}
          ></img>
          <p id={Styles.profileNickname}>
            {fakeProfileRetrievedByApi.nickname}
          </p>
          <p id={Styles.profileUsername}>
            {fakeProfileRetrievedByApi.username}
          </p>
          <p id={Styles.profileLocation}>
            {fakeProfileRetrievedByApi.location}
          </p>
        </header>
        <div
          className={Styles.horizontalLine}
          id={Styles.headerHorizontalLine}
        ></div>
        <body className={Styles.profileBody}>
          <h1>Biography</h1>
          <div className={Styles.biographyBox}>
            <p>{fakeProfileRetrievedByApi.biography}</p>
          </div>
          <div
            className={Styles.horizontalLine}
            id={Styles.profileConnectionsHorizontalLine}
          ></div>
          <div className={Styles.profileConnections}>
            <p id={Styles.profileConnectionsLabel}>
              {fakeProfileRetrievedByApi.nickname} Connections:{" "}
            </p>
            <div className={Styles.connectionsContainer}>
              <div className={Styles.socialBox}>
                <DiscordIcon></DiscordIcon>
                <p>{fakeProfileRetrievedByApi.socialMedias?.discord?.id}</p>
              </div>
              <div className={Styles.socialBox}>
                <GithubIcon></GithubIcon>
                <p>{fakeProfileRetrievedByApi.socialMedias?.github?.id}</p>
              </div>
            </div>
          </div>
          <div className={Styles.horizontalLine}></div>
          <div className={Styles.profilePublications}>
            <h2>This user has not made any posts</h2>
          </div>
        </body>
      </div>
    </main>
  );
};

export default ProfileView;
