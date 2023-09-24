import Styles from "../../Styles/app.module.css";
import PublicationDto from "../../DTO/PublicationDto";
import PublicationPfpData from "../../types/PublicationPfp";
import PublicationService from "../Services/Publication.Service";

const PublicationCard = ({
  publicationDto,
}: {
  publicationDto: PublicationDto;
}) => {
  const imageProps: PublicationPfpData = {
    src: `Assets/UsersPfp/user-${publicationDto.authorId}.jpeg`,
    className: `publication-userid-${publicationDto.authorId}`,
    id: `publication-id-${publicationDto.publicationId}`,
    alreadysanitized: "no",
  };

  const publicationService = new PublicationService();

  return (
    <div className={Styles.publicationCard}>
      <header>
        <img
          {...imageProps}
          onError={() => {
            publicationService.changePfpToDefaultPfp(publicationDto.authorId);
          }}
        ></img>
        <p>@{publicationDto.authorUsername}</p>
        <p>{publicationDto.authorNickname}</p>
        <p>
          {publicationService.getDateDiff(
            publicationDto.publicationDate.getTime()
          )}
        </p>
      </header>
      <main>
        <p>{publicationDto.publicationContent}</p>
      </main>
      <footer>
        <p>Likes: {publicationDto.publicationLikesCounter}</p>
        <p>Comments: {publicationDto.publicationCommentsCounter}</p>
        <p>Shares: {publicationDto.publicationSharesCounter}</p>
      </footer>
    </div>
  );
};

export default PublicationCard;
