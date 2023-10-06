import AccountDto from "../DTO/AccountDto";

type AuthenticationProps = {
  accountDataObject: AccountDto;
  isAuthenticated: boolean;
  JWT: string | null;
};

export default AuthenticationProps;
