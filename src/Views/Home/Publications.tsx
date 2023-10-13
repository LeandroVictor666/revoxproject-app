import { useState } from "react";
import PublicationController from "../../Controllers/Publication/PublicationController";
import PublicationsDto from "../../DTO/PublicationsDto";
import PublicationCard from "../../Components/PublicationCard/PublicationCard";

const PublicationsComponent = (): JSX.Element => {
  const publicationController = new PublicationController();
  const [alreadyFirstLoad, setAlreadyFirstLoad] = useState<boolean>(false);
  const [publications, setPublications] = useState<PublicationsDto>({
    count: 0,
    publications: [],
  });
  const [lastPublicationsId, setLastPublicationsId] = useState(0);
  const [continueLoading, setContinueLoading] = useState<boolean>(true);
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;
    const distanceFromBottom = scrollHeight - (scrollPosition + windowHeight);
    const threshold = 120;
    if (distanceFromBottom <= threshold && continueLoading === true) {
      if (publicationController.lastFetchIsMoreThan25SecondsAgo() === false) {
        return;
      }
      publicationController
        .fetchPublications(lastPublicationsId)
        .then((response) => {
          //25 is because the LIMIT of search query in API is 25, if is different of 25, it means that we have reached maximum publications.
          if (response.count == 0 || publications.count != 25) {
            setContinueLoading(false);
            return;
          }
          const newPublications: PublicationsDto = {
            count: response.count,
            publications: publications.publications,
          };
          newPublications.publications.push(...response.publications);
          setPublications(newPublications);
          setLastPublicationsId(newPublications.publications[0].id);
        });
    }
  };
  window.addEventListener("scroll", handleScroll);

  if (alreadyFirstLoad === false && continueLoading === true) {
    publicationController.fetchPublications(0).then((response) => {
      setPublications(response);
      setAlreadyFirstLoad(true);
      setLastPublicationsId(response.publications[0].id);
    });
  }
  if (publications.count !== 0 && publications.publications != null) {
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
