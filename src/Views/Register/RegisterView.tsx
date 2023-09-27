import Styles from "../../Styles/app.module.css";
import * as React from "react";
import MonthsEnum from "../../Types/Months.enum";
import renderYearsComponent from "./RegisterYearsComponent";
import * as AccountRules from "../../Rules/AccountRules";
import renderDaysComponent from "./RenderDaysComponent";
import RenderMonthsComponent from "./RenderMonthsComponent";

const RegisterView = (): JSX.Element => {
  const [username, setUsername] = React.useState<string>("");
  const [nickname, setNickname] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [month, setMonth] = React.useState<string>(MonthsEnum.January);
  const [day, setDay] = React.useState<number>(1);
  const [year, setYear] = React.useState<number>(
    AccountRules.BIRTHDAY_ACTUAL_YEAR
  );

  const inputHandler = (
    ev:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const inputType = ev.target.getAttribute("name");
    switch (inputType) {
      case "username": {
        setUsername(ev.target.value);
        break;
      }
      case "nickname": {
        setNickname(ev.target.value);
        break;
      }
      case "email": {
        setEmail(ev.target.value);
        break;
      }
      case "password": {
        setPassword(ev.target.value);
        break;
      }
      case "birthdayMonth": {
        setMonth(ev.target.value);
        break;
      }
      case "birthdayDay": {
        setDay(Number(ev.target.value));
        break;
      }
      case "birthdayYear": {
        setYear(Number(ev.target.value));
        break;
      }
    }
  };

  return (
    <main>
      <div className={Styles.registerContainer}>
        <form className={Styles.registerForm}>
          <div className={Styles.registerInputBox}>
            <p>Username</p>
            <input
              type="text"
              placeholder="Input Your Username"
              name="username"
              autoComplete="off"
              value={username}
              onChange={(ev) => {
                inputHandler(ev);
              }}
            />
          </div>
          <div className={Styles.registerInputBox}>
            <p>Nickname</p>
            <input
              type="text"
              placeholder="Input Your Nickname"
              name="nickname"
              autoComplete="off"
              value={nickname}
              onChange={(ev) => {
                inputHandler(ev);
              }}
            />
          </div>
          <div className={Styles.registerInputBox}>
            <p style={{ marginRight: "22.5%" }}>Email</p>
            <input
              type="email"
              placeholder="Input Your Email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(ev) => {
                inputHandler(ev);
              }}
            />
          </div>
          <div className={Styles.registerInputBox}>
            <p>Passworrd</p>
            <input
              type="password"
              placeholder="Input Your Secret Password"
              name="password"
              value={password}
              onChange={(ev) => {
                inputHandler(ev);
              }}
            />
          </div>
          <div
            className={`${Styles.registerInputBox} ${Styles.birthdayContainer}`}
          >
            <p>Birthday</p>
            <div className={Styles.selectsContainer}>
              <select
                id="months"
                name="birthdayMonth"
                value={month}
                onChange={(ev) => {
                  inputHandler(ev);
                }}
              >

                {RenderMonthsComponent()}
              </select>
              <select
                id="days"
                name="birthdayDay"
                value={day}
                onChange={(ev) => {
                  inputHandler(ev);
                }}
              >
                {renderDaysComponent()}
              </select>
              <select
                id="years"
                name="birthdayYear"
                value={year}
                onChange={(ev) => {
                  inputHandler(ev);
                }}
              >
                {renderYearsComponent()}
              </select>
            </div>
          </div>
          <div className={Styles.registerControls}>
            <button className={Styles.registerBtn}>
              <p>Create new account</p>
            </button>
            <a href="/login">Already have a account?</a>
            <div className={Styles.termsOfServiceContainer}>
              <div
                className={Styles.horizontalLine}
                style={{ marginTop: "32px" }}
              ></div>
              <p className={Styles.registerTerms}>
                By registering on our website, you agree to our terms <br />
                and conditions, and blah blah blah
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterView;
