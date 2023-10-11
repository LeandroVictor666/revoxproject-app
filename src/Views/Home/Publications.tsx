import { useState } from "react";
import PublicationController from "../../Controllers/Publication/PublicationController";
import PublicationsDto from "../../DTO/PublicationsDto";
import PublicationCard from "../../Components/PublicationCard/PublicationCard";

const PublicationsComponent = (): JSX.Element => {
  const publicationController = new PublicationController();
  const [alreadyFirstLoad, setAlreadyFirstLoad] = useState<boolean>(false);
  const [publications, setPublication] = useState<PublicationsDto>({
    count: 0,
    publications: [],
  });
  if (alreadyFirstLoad === false) {
    publicationController
      .fetchPublications()
      .then((response) => {
        setPublication(response);
        setAlreadyFirstLoad(true);
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  }

  if (publications.count !== 0) {
    return (
      <>
        {publications.publications.map((publication) => {
          return (
            <PublicationCard publicationDto={publication}></PublicationCard>
          );
        })}
      </>
    );
  }
  return (
    <>
      <p>No publications were made today.</p>
    </>
  );
};
export default PublicationsComponent;
