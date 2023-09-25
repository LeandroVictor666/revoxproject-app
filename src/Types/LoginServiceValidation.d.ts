import LoginErrorIdEnum from "./LoginServiceErrorId.e";

type LoginInputValidationObject = {
  isValid: boolean;
  reason?: string;
  errorCode: LoginErrorIdEnum;
};

export default LoginInputValidationObject;
