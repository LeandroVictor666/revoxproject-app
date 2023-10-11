import PublicationDto from "./PublicationDto";
export default class PublicationsDto {
  publications: Array<PublicationDto>;
  count: number;
  constructor(publications: Array<PublicationDto>, count: number) {
    this.publications = publications;
    this.count = count;
  }
}
