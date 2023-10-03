export default class RegisterAccountDto {
  username: string;
  nickname: string;
  email: string;
  password: string;
  birthday: Date;
  constructor(
    username: string,
    nickname: string,
    email: string,
    password: string,
    birthday: Date
  ) {
    this.username = username;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
  }
}
