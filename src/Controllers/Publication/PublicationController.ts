import PublicationsDto from "../../DTO/PublicationsDto";
import PublicationService from "../../Services/Publication.Service";

export default class PublicationController {
  private publicationService: PublicationService;
  constructor() {
    this.publicationService = new PublicationService();
  }
  async fetchPublications(
    lastPublicationId: number = 0
  ): Promise<PublicationsDto> {
    try {
      const publications = await this.publicationService.getPublications(
        lastPublicationId
      );
      return publications;
    } catch (error) {
      return { count: 0, publications: [] };
    }
  }
}
