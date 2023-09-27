export default class RegisterAccountDto {
  username: string;
  nickname: string;
  email: string;
  password: string;
  day: number;
  month: string;
  year: number;

  constructor(
    username: string,
    nickname: string,
    email: string,
    password: string,
    day: number,
    month: string,
    year: number
  ) {
    this.username = username;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.day = day;
    this.month = month;
    this.year = year;
  }
}
