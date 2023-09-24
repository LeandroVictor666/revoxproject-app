import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PublicationCard from "./PublicationCard";
import PublicationDto from "../../DTO/PublicationDto";
import { faker } from "@faker-js/faker";
const getDateDiff = (dateInMiliSeconds: number) => {
  const actualDate = new Date().getTime();
  const diff = Math.floor((actualDate - dateInMiliSeconds) / (1000 * 60));
  if (diff < 1) {
    return "Published right now";
  } else if (diff < 60) {
    return `Published ${diff} minute${diff === 1 ? "" : "s"} ago`;
  } else if (diff < 1440) {
    const hours = Math.floor(diff / 60);
    return `Published ${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (diff < 10080) {
    const days = Math.floor(diff / 1440);
    return `Published ${days} day${days === 1 ? "" : "s"} ago`;
  } else if (diff < 43800) {
    const weeks = Math.floor(diff / 10080);
    return `Published ${weeks} week${weeks === 1 ? "" : "s"} ago`;
  } else if (diff < 525600) {
    const months = Math.floor(diff / 43800);
    return `Published ${months} month${months === 1 ? "" : "s"} ago`;
  } else {
    const years = Math.floor(diff / 525600);
    return `Published ${years} year${years === 1 ? "" : "s"} ago`;
  }
};

describe("Publication-Component", () => {
  it("should render publication component correctly", () => {
    const publicationDto: PublicationDto = {
      authorId: 0,
      publicationId: 0,
      authorNickname: "Leandro Victor",
      authorUsername: "leandro-victor-666",
      publicationCommentsCounter: 1,
      publicationContent: "Publication Content",
      publicationDate: new Date("2023-09-24T05:32:45"),
      publicationLikesCounter: 1,
      publicationSharesCounter: 1,
    };
    const dateDiff = getDateDiff(new Date("2023-09-24T05:32:45").getTime());

    render(<PublicationCard publicationDto={publicationDto} />);
    expect(
      screen.getByText(`@${publicationDto.authorUsername}`)
    ).toBeInTheDocument();

    expect(screen.getByText(dateDiff)).toBeInTheDocument();
    expect(
      screen.getByText(publicationDto.publicationContent)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Likes: ${publicationDto.publicationLikesCounter}`)
    );
    expect(
      screen.getByText(`Comments: ${publicationDto.publicationCommentsCounter}`)
    );
    expect(
      screen.getByText(`Shares: ${publicationDto.publicationSharesCounter}`)
    );
  });

  it("should render publication component correctly (with random properties)", () => {
    const publicationDto: PublicationDto = {
      authorId: 0,
      publicationId: 0,
      authorNickname: faker.person.firstName(),
      authorUsername: faker.person.fullName(),
      publicationCommentsCounter: faker.number.int({ max: 99999 }),
      publicationContent: faker.lorem.lines({ min: 1, max: 1 }),
      publicationDate: new Date(),
      publicationLikesCounter: faker.number.int(),
      publicationSharesCounter: faker.number.int(),
    };
    const dateDiff = getDateDiff(publicationDto.publicationDate.getTime());

    render(<PublicationCard publicationDto={publicationDto} />);
    expect(
      screen.getByText(`@${publicationDto.authorUsername}`)
    ).toBeInTheDocument();

    expect(screen.getByText(dateDiff)).toBeInTheDocument();
    expect(
      screen.getByText(publicationDto.publicationContent)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Likes: ${publicationDto.publicationLikesCounter}`)
    );
    expect(
      screen.getByText(`Comments: ${publicationDto.publicationCommentsCounter}`)
    );
    expect(
      screen.getByText(`Shares: ${publicationDto.publicationSharesCounter}`)
    );
  });
});
