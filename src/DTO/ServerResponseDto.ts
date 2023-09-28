//ATUALIZAR A  NOVA PROP ResponseFrom em todos os ARQUIVOS.
import ServerErrorsEnum from "../Types/ServerErrors.enum";

type ServerResponseDto = {
  readonly response: string;
  readonly isError: boolean;
  readonly responseType: ServerErrorsEnum;
  readonly responseFrom: "server";
};
export default ServerResponseDto;
