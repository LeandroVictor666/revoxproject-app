import ProfileSocialMedias from "../Types/ProfileSocialMedias";
export default class ProfileDto {
  username: string;
  nickname: string;
  id: number;
  biography: string;
  location: string;
  socialMedias: ProfileSocialMedias;

  constructor(
    username: string,
    nickname: string,
    id: number,
    biography: string,
    location: string,
    socialMedias: ProfileSocialMedias
  ) {
    this.username = username;
    this.nickname = nickname;
    this.id = id;
    this.biography = biography;
    this.location = location;
    this.socialMedias = socialMedias;
  }
}
