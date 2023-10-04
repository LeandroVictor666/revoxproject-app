export default class AccountDto {
  id: number;
  username: string;
  nickname: string;
  email: string;
  birthday: Date;

  constructor(
    id: number,
    username: string,
    nickname: string,
    email: string,
    birthday: Date
  ) {
    this.id = id;
    this.username = username;
    this.nickname = nickname;
    this.email = email;
    this.birthday = birthday;
  }
}
