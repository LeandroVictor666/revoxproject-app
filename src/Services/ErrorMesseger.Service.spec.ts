import InputEnums from "../Types/InputEnums.enum";
import InputValidationResponseEnums from "../Types/InputValidationErrorObject.enum";
import ErrorMessagerService from "./ErrorMesseger.Service";
describe("test some Error Messeger returns (username)", () => {
  const errorMEsseger = new ErrorMessagerService();
  it("should return a FailedMinUpperCase error", () => {
    const returned = errorMEsseger.dispatchInputValidationErrorMessage(
      InputEnums.Password,
      InputValidationResponseEnums.FailedMinUpperCase
    );
    expect(returned).toMatchObject({
      errorCode: InputValidationResponseEnums.FailedMinUpperCase,
      isValid: false,
    });
  });
});
