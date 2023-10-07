export default class AccountDto {
  id: number;
  username: string;
  nickname: string;
  email: string;
  isPfpSet: boolean;
  birthday: Date;
  constructor(
    id: number,
    username: string,
    nickname: string,
    email: string,
    isPfpSet: boolean,
    birthday: Date
  ) {
    this.id = id;
    this.username = username;
    this.nickname = nickname;
    this.email = email;
    this.isPfpSet = isPfpSet;
    this.birthday = birthday;
  }
}
