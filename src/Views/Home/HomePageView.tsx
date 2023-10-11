import MakePublicationComponent from "../../Components/MakePublication/MakePublication";
import Styles from "../../Styles/app.module.css";
import PublicationsComponent from "./Publications";
const HomePageView = (): JSX.Element => {
  return (
    <main className={Styles.homePageMain}>
      <MakePublicationComponent></MakePublicationComponent>
      <div className={Styles.publicationsContainer}>
        <PublicationsComponent />
      </div>
    </main>
  );
};

export default HomePageView;
