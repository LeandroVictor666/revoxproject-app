import * as registerViewModule from "../Views/Register/RegisterView";
export const View = registerViewModule.default;

import * as MonthsComponentModule from "../Views/Register/RenderMonthsComponent";
export const MonthsInputComponent = MonthsComponentModule.default;

import * as DaysInputComponentModule from "../Views/Register/RenderDaysComponent";
export const DaysInputComponent = DaysInputComponentModule.default;

import * as YearsInputComponentModule from "../Views/Register/RegisterYearsComponent";
export const YearsInputComponent = YearsInputComponentModule.default;

import MonthsEnumModule from "../Types/Months.enum";
export const MonthsEnum = MonthsEnumModule;

import * as RegisterViewFunctionsModule from "../Functions/RegisterViewFunctions";
export const ViewFunctions = RegisterViewFunctionsModule;

import RegisterAccountDtoModule from "../DTO/RegisterAccountDto";
export const Dto = RegisterAccountDtoModule;


import RegisterService from "../Services/Register.Service";
export const Service = RegisterService;

import RegisterControllerModule from "../Controllers/Register/RegisterController";
export const Controller = RegisterControllerModule;
