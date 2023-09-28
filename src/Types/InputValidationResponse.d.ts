import InputValidationErrorEnum from "./InputValidationErrorObject.enum";

type InputValidationResponse = {
  isValid: boolean;
  reason?: string;
  errorCode: InputValidationErrorEnum;
  readonly responseFrom: "client";
};

export default InputValidationResponse;
