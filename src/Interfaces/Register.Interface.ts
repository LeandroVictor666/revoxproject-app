//import ServerResponseDto from "../DTO/ServerResponseDto";
import InputValidationResponse from "../Types/InputValidationResponse";

export default interface RegisterInterface {
  validateUsername(username: string): InputValidationResponse;
  validateNickname(nickname: string): InputValidationResponse;
  validateEmail(email: string) : InputValidationResponse;
  validatePassword(password:string) : InputValidationResponse;
  
}
