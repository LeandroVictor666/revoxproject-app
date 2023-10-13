import PublicationsDto from "../../DTO/PublicationsDto";
import PublicationService from "../../Services/Publication.Service";

export default class PublicationController {
  private publicationService: PublicationService;
  private lastPublicationFetch: Date;
  constructor() {
    this.publicationService = new PublicationService();
    this.lastPublicationFetch = new Date(2000, 10, 10);
  }
  lastFetchIsMoreThan25SecondsAgo() {
    const currentTime = new Date().getTime();
    const lastFetchTime = this.lastPublicationFetch.getTime();
    const twentyFiveInMilliseconds = 25 * 1000;
    if (currentTime - lastFetchTime < twentyFiveInMilliseconds) {
      return false;
    }
    return true;
  }
  async fetchPublications(lastPublicationId: number): Promise<PublicationsDto> {
    if (this.lastFetchIsMoreThan25SecondsAgo() === false) {
      return { count: 0, publications: [] };
    }
    try {
      this.lastPublicationFetch = new Date();
      const publications = await this.publicationService.getPublications(
        lastPublicationId
      );
      return publications;
    } catch (error) {
      return { count: 0, publications: [] };
    }
  }
}
