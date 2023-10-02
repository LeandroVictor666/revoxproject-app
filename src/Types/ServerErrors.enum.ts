enum ResponseStatus {
  Success = 0,
  ClientInputError = 1,
  InternalServerError = 2,
  NeedAuthorization = 3,
}

export default ResponseStatus;
