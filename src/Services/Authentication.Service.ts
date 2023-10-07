import AccountDto from "../DTO/AccountDto";
import CacheService from "./Cache.Service";
import jwtDecode from "jwt-decode";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { changeAuth } from "../Redux/AccountAuth.redux";
import AuthenticationProps from "../Types/AuthenticationProps";
type accountDataObjectType = {
  accountData: AccountDto;
};
export default class AuthenticationService {
  cacheService = new CacheService();
  private getJwtToken(): string | null {
    return this.cacheService.getDataInSessionStorage("jwt_token");
  }
  decodeJwt(): AccountDto | null {
    const userJwt = this.getJwtToken();
    if (userJwt === null) {
      return null;
    }
    const decoded = jwtDecode<accountDataObjectType>(userJwt);
    if (decoded === null) {
      return null;
    }
    return decoded.accountData;
  }
  propagateAuthentication(dispatch: Dispatch<AnyAction>) {
    const jwtToken = this.getJwtToken();
    if (jwtToken === null) {
      return false;
    }
    const decodedJwt = this.decodeJwt();
    if (decodedJwt === null) {
      return false;
    }
    const payload: AuthenticationProps = {
      accountDataObject: decodedJwt,
      isAuthenticated: true,
      JWT: jwtToken,
    };
    dispatch(changeAuth(payload));
  }
}
