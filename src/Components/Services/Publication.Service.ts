export default class PublicationService {
  getDateDiff = (dateInMiliSeconds: number) => {
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


  changePfpToDefaultPfp = (authorId: number) => {
    const publications = document.getElementsByClassName(
      `publication-userid-${authorId}`
    );

    for (const publication of publications) {
      if (publication.getAttribute("alreadysanitized") === "yes") {
        continue;
      } else {
        publication.setAttribute("src", "Assets/UsersPfp/default.jpeg");
        publication.setAttribute("alreadysanitized", "yes");
      }
    }
  };
}
