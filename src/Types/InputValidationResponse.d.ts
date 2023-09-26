import LoginErrorIdEnum from "./InputValidationErrorObject.enum";

type InputValidationResponse = {
  isValid: boolean;
  reason?: string;
  errorCode: LoginErrorIdEnum;
};

export default InputValidationResponse;
