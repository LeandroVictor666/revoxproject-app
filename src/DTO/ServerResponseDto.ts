//ATUALIZAR A  NOVA PROP ResponseFrom em todos os ARQUIVOS.
import ResponseStatus from "../Types/ServerErrors.enum";

type ServerResponseDto = {
  readonly response: string;
  readonly isError: boolean;
  readonly responseStatus: ResponseStatus;
  readonly responseFrom: "server";
};
export default ServerResponseDto;
