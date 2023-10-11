export default class PublicationDto {
  id: number;
  authorId: number;
  authorNickname: string;
  authorUsername: string;
  publicationDate: Date;
  content: string;
  likesCounter: number;
  commentsCounter: number;
  sharesCounter: number;

  constructor(
    authorId: number,
    id: number,
    authorNickname: string,
    authorUsername: string,
    publicationDate: Date,
    content: string,
    likesCounter: number,
    commentsCounter: number,
    sharesCounter: number
  ) {
    this.authorId = authorId;
    this.id = id;
    this.authorNickname = authorNickname;
    this.authorUsername = authorUsername;
    this.publicationDate = publicationDate;
    this.content = content;
    this.likesCounter = likesCounter;
    this.commentsCounter = commentsCounter;
    this.sharesCounter = sharesCounter;
  }
}
