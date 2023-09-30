import ProfileDto from "../../DTO/ProfileDto";
import Styles from "../../Styles/app.module.css";
import DiscordIcon from "../../assets/icons/DiscordIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
const ProfileConnectionsComponent = ({
  profileDto,
}: {
  profileDto: ProfileDto;
}): JSX.Element => {
  return (
    <div className={Styles.profileConnections}>
      <p id={Styles.profileConnectionsLabel}>
        {profileDto.nickname} Connections:{" "}
      </p>
      <div className={Styles.connectionsContainer}>
        <div className={Styles.socialBox}>
          <DiscordIcon></DiscordIcon>
          <p>{profileDto.socialMedias?.discord?.id}</p>
        </div>
        <div className={Styles.socialBox}>
          <GithubIcon></GithubIcon>
          <p>{profileDto.socialMedias?.github?.id}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileConnectionsComponent;
