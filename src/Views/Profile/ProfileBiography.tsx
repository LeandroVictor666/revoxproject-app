import Styles from "../../Styles/app.module.css";
const ProfileBiographyComponent = ({
  userBiography,
}: {
  userBiography: string;
}) => {
  return (
    <>
      <h1>Biography</h1>
      <div className={Styles.biographyBox}>
        <p>{userBiography}</p>
      </div>
    </>
  );
};

export default ProfileBiographyComponent;
