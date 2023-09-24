import PublicationService from "./Publication.Service";
describe("Publication Service Get Date Diff Method", () => {
  const publicationService = new PublicationService();
  it("should return 'Published right now'", () => {
    const result = publicationService.getDateDiff(new Date().getTime());
    expect(result).toBe("Published right now");
  });
  it("should return 'Published 1 minute ago'", () => {
    //result is in miliseconds, 60000 ms = 1 minute.
    const fakeDate = new Date().getTime() - 60000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 1 minute ago");
  });
  it("should return 'Published 7 minutes ago'", () => {
    const fakeDate = new Date().getTime() - 420000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 7 minutes ago");
  });
  it("should return 'Published 1 hour ago'", () => {
    const fakeDate = new Date().getTime() - 3600000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 1 hour ago");
  });
  it("should return 'Published 2 hours ago'", () => {
    const fakeDate = new Date().getTime() - 7200000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 2 hours ago");
  });
  it("should return 'Published 1 day ago'", () => {
    const fakeDate = new Date().getTime() - 86400000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 1 day ago");
  });
  it("should return 'Published 4 days ago'", () => {
    const fakeDate = new Date().getTime() - 345600000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 4 days ago");
  });
  it("should return 'Published 1 week ago'", () => {
    const fakeDate = new Date().getTime() - 604800000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 1 week ago");
  });
  it("should return 'Published 2 weeks ago'", () => {
    const fakeDate = new Date().getTime() - 1209600000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 2 weeks ago");
  });
  it("should return 'Published 1 month ago'", () => {
    const fakeDate = new Date().getTime() - 3024000000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 1 month ago");
  });
  it("should return 'Published 6 months ago'", () => {
    const fakeDate = new Date().getTime() - 18144000000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 6 months ago");
  });
  it("should return 'Published 1 year ago'", () => {
    const fakeDate = new Date().getTime() - 36288000000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 1 year ago");
  });
  it("should return 'Published 4 years ago'", () => {
    const fakeDate = new Date().getTime() - 145152000000;
    const result = publicationService.getDateDiff(fakeDate);
    expect(result).toBe("Published 4 years ago");
  });
});
