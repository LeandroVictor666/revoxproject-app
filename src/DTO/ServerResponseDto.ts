import ServerErrorsEnum from "../Types/ServerErrors.enum";

type ServerResponseDto = {
  readonly response: string;
  readonly isError: boolean;
  readonly responseType: ServerErrorsEnum;
};
export default ServerResponseDto;