import Styles from "../../Styles/app.module.css";
import PublicationDto from "../../DTO/PublicationDto";
import PublicationPfpData from "../../Types/PublicationPfp";
import PublicationService from "../../Services/Publication.Service";
import PublicationOrn from "./PublicationOrn";
import * as PublicationIcons from "./PublicationIcons";

const PublicationCard = ({
  publicationDto,
}: {
  publicationDto: PublicationDto;
}) => {
  const imageProps: PublicationPfpData = {
    src: `Assets/UsersPfp/user-${publicationDto.authorId}.jpeg`,
    className: `publication-userid-${publicationDto.authorId}`,
    id: `publication-id-${publicationDto.id}`,
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
        <div className={Styles.publicationHeaderContent}>
          <p className={Styles.authorUsername}>
            @{publicationDto.authorUsername}
          </p>
          {/* I Will fix this later.
          <p className={Styles.publicationDate}>
            {publicationService.getDateDiff(
              publicationDto.publicationDate.getTime()
            )}
          </p> */}
        </div>
      </header>
      <div className={Styles.lineContainerFixer}>
        <div className={Styles.horizontalLine}></div>
      </div>
      <main>
        <p>{publicationDto.content}</p>
      </main>
      <div className={Styles.lineContainerFixer}>
        <PublicationOrn />
      </div>
      {/* i will use this later. */}
      <div className={Styles.publicationStatistic} style={{ display: "none" }}>
        <p>Likes: {publicationDto.likesCounter}</p>
        <p>Comments: {publicationDto.commentsCounter}</p>
        <p>Shares: {publicationDto.sharesCounter}</p>
      </div>
      <footer className={Styles.publicationFooter}>
        <div className={Styles.publicationControl} id="like-publication">
          <PublicationIcons.Heart />
          <span>Like</span>
        </div>
        <div className={Styles.publicationControl} id="comment-publication">
          <PublicationIcons.CommentDots />
          <span>Comment</span>
        </div>
        <div className={Styles.publicationControl} id="share-publication">
          <PublicationIcons.Share />
          <span>Share</span>
        </div>
      </footer>
    </div>
  );
};

export default PublicationCard;
