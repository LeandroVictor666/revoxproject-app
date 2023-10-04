import AccountDto from "../DTO/AccountDto";

type AuthenticationProps = {
  accountDataObject: AccountDto | null;
  isAuthenticated: boolean;
};

export default AuthenticationProps;
