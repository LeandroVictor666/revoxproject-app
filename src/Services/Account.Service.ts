import AccountDto from "../DTO/AccountDto";

/**
 * This service is responsible to make all fetchs to api or client-side confirmations related to account
 * Originally this service should only be instancied a unique time
 * The only other case it should be instancied is when the Publication Component si rendered
 */
export default class AccountService {
  accountData: AccountDto;
  pfpFileExists: boolean = true;
  constructor($accountData: AccountDto) {
    this.accountData = $accountData;
  }

  /**
   * This check if the pfp of account is set, and return the correct pfp path
   * @returns pfp src path
   */
  public getPfpSrc(): string {
    if (this.accountData.isPfpSet === false || this.accountData.id == null) {
      return "/Assets/UsersPfp/default.jpeg";
    }
    return `/Assets/UsersPfp/user-${this.accountData.id}.jpeg`;
  }

  /**
   * This method exists because: whenever the web application presents the username, it MUST contain an '@' at the beginning, also the username must be showed in lowercase. this is a convention
   * @returns @string account username formated.
   */
  public getUsername(): string {
    return `@${this.accountData.username.toLowerCase()}`;
  }
}
