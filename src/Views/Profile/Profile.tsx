import * as ProfileModule from "../../Modules/Profile.module";
import { useParams } from "react-router-dom";
import ProfileDto from "../../DTO/ProfileDto";
import Styles from "../../Styles/app.module.css";
import HorizontalLine from "../../Components/HorizontalLine/HorizontalLine";

const ProfileView = (): JSX.Element => {
  const { profileId } = useParams();

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
        <ProfileModule.HeaderComponent profileDto={fakeProfileRetrievedByApi} />
        <HorizontalLine idName={Styles.headerHorizontalLine}></HorizontalLine>
        <body className={Styles.profileBody}>
          <ProfileModule.BiographyComponent
            userBiography={fakeProfileRetrievedByApi.biography}
          />
          <HorizontalLine
            idName={Styles.profileConnectionsHorizontalLine}
          ></HorizontalLine>
          <ProfileModule.ConnectionsComponent
            profileDto={fakeProfileRetrievedByApi}
          />
          <HorizontalLine></HorizontalLine>
          <ProfileModule.PublicationsComponent />
        </body>
      </div>
    </main>
  );
};

export default ProfileView;
