import InputValidationErrorEnum from "./InputValidationErrorObject.enum";

type InputValidationResponse = {
  isValid: boolean;
  reason?: string;
  errorCode: InputValidationErrorEnum;
};

export default InputValidationResponse;
