import ProfileDto from "../../DTO/ProfileDto";
import Styles from "../../Styles/app.module.css";
const ProfileHeaderComponent = ({ profileDto }: { profileDto: ProfileDto }) => {
  return (
    <header>
      <img src={`../Assets/UsersPfp/user-${profileDto.id}.jpeg`}></img>
      <p id={Styles.profileNickname}>{profileDto.nickname}</p>
      <p id={Styles.profileUsername}>{profileDto.username}</p>
      <p id={Styles.profileLocation}>{profileDto.location}</p>
    </header>
  );
};

export default ProfileHeaderComponent;
