import MakePublicationComponent from "../../Components/MakePublication/MakePublication";
import PublicationCard from "../../Components/PublicationCard/PublicationCard";
import PublicationDto from "../../DTO/PublicationDto";
import Styles from "../../Styles/app.module.css";
import { faker } from "@faker-js/faker";
const HomePageView = (): JSX.Element => {
  const fakePublicationDto: PublicationDto = {
    authorId: 0,
    publicationId: 0,
    authorNickname: "Leandro Victor",
    authorUsername: "leandro-victor-666",
    publicationCommentsCounter: 1,
    publicationContent: faker.lorem.text(),
    publicationDate: new Date("2023-09-24T05:32:45"),
    publicationLikesCounter: 1,
    publicationSharesCounter: 1,
  };
  const fakePublicationDto2: PublicationDto = {
    authorId: 0,
    publicationId: 0,
    authorNickname: "Leandro Victor",
    authorUsername: "leandro-victor-666",
    publicationCommentsCounter: 1,
    publicationContent: faker.lorem.text(),
    publicationDate: new Date("2023-09-24T05:32:45"),
    publicationLikesCounter: 1,
    publicationSharesCounter: 1,
  };

  return (
    <main className={Styles.homePageMain}>
      <MakePublicationComponent></MakePublicationComponent>
      <div className={Styles.publicationsContainer}>
        <PublicationCard publicationDto={fakePublicationDto} />
        <PublicationCard publicationDto={fakePublicationDto2} />
      </div>
    </main>
  );
};

export default HomePageView;
