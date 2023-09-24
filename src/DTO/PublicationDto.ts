export default class PublicationDto {
  authorId: number;
  publicationId: number;
  authorNickname: string;
  authorUsername: string;
  publicationDate: Date;
  publicationContent: string;
  publicationLikesCounter: number;
  publicationCommentsCounter: number;
  publicationSharesCounter: number;

  constructor(
    authorId: number,
    publicationId: number,
    authorNickname: string,
    authorUsername: string,
    publicationDate: Date,
    publicationContent: string,
    publicationLikesCounter: number,
    publicationCommentsCounter: number,
    publicationSharesCounter: number
  ) {
    this.authorId = authorId;
    this.publicationId = publicationId;
    this.authorNickname = authorNickname;
    this.authorUsername = authorUsername;
    this.publicationDate = publicationDate;
    this.publicationContent = publicationContent;
    this.publicationLikesCounter = publicationLikesCounter;
    this.publicationCommentsCounter = publicationCommentsCounter;
    this.publicationSharesCounter = publicationSharesCounter;
  }

  
}
