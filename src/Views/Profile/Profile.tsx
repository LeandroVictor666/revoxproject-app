import { useParams } from "react-router-dom";
import ProfileDto from "../../DTO/ProfileDto";
import Styles from "../../Styles/app.module.css";
import ProfileHeaderComponent from "./ProfileHeader";
import HorizontalLine from "../../Components/HorizontalLine/HorizontalLine";
import ProfileConnectionsComponent from "./ProfileConnections";
import ProfilePublicationsComponent from "./ProfilePublications";
import ProfileBiographyComponent from "./ProfileBiography";
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
        <ProfileHeaderComponent profileDto={fakeProfileRetrievedByApi} />
        <HorizontalLine idName={Styles.headerHorizontalLine}></HorizontalLine>
        <body className={Styles.profileBody}>
          <ProfileBiographyComponent
            userBiography={fakeProfileRetrievedByApi.biography}
          />
          <HorizontalLine
            idName={Styles.profileConnectionsHorizontalLine}
          ></HorizontalLine>
          <ProfileConnectionsComponent profileDto={fakeProfileRetrievedByApi} />
          <HorizontalLine></HorizontalLine>
          <ProfilePublicationsComponent />
        </body>
      </div>
    </main>
  );
};

export default ProfileView;
