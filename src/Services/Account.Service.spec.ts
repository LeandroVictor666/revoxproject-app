import AccountDto from "../DTO/AccountDto";
import AccountService from "./Account.Service";
describe("test Account Service methods", () => {
  it("should return the default.jpeg pfp file", () => {
    const accountDto: AccountDto = new AccountDto(
      1,
      "testAccount",
      "testAccount",
      "test@gmail.com",
      false,
      new Date(2004, 6, 14)
    );
    const accountService = new AccountService(accountDto);
    const srcPath = accountService.getPfpSrc();
    expect(srcPath).toBe("/Assets/UsersPfp/default.jpeg");
  });
  it("should return the pfp file", () => {
    const accountDto: AccountDto = new AccountDto(
      8571,
      "testAccount",
      "testAccount",
      "test@gmail.com",
      true,
      new Date(2004, 6, 14)
    );
    const accountService = new AccountService(accountDto);
    const srcPath = accountService.getPfpSrc();
    expect(srcPath).toBe(`/Assets/UsersPfp/user-${accountDto.id}.jpeg`);
  });
});
