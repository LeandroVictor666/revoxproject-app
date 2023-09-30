import * as React from "react";
import * as ReactRedux from "react-redux";
import Styles from "../../Styles/app.module.css";
import * as AccountRules from "../../Rules/AccountRules";
import * as RegisterModule from "../../Modules/Register.Module";

const RegisterView = (): JSX.Element => {
  const [username, setUsername] = React.useState<string>("");
  const [nickname, setNickname] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [month, setMonth] = React.useState<string>(
    RegisterModule.MonthsEnum.January
  );
  const [day, setDay] = React.useState<number>(1);
  const [year, setYear] = React.useState<number>(
    AccountRules.BIRTHDAY_ACTUAL_YEAR
  );
  const dispatch = ReactRedux.useDispatch();

  const inputHandler = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
  const submitHandler = async (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();
    const accountData = new RegisterModule.Dto(
      username,
      nickname,
      email,
      password,
      day,
      month,
      year
    );
    await RegisterModule.ViewFunctions.callToRegisterFunction(
      accountData,
      dispatch
    );
    return;
  };

  //é melhor instanciar um unico objeto (RegisterController), do que criar 1 instancia a cada vez que a função seja renderizada pelo react
  const registerController = new RegisterModule.Controller();

  const renderUsernameInput = () => {
    const validationResult = registerController.validateUsername(username);
    let borderStyle: React.CSSProperties = {
      border: "1px solid black",
    };

    if (username.length === 0) {
      borderStyle = {
        border: "1px solid black",
      };
    } else if (validationResult.isValid === false) {
      borderStyle = {
        ...borderStyle,
        borderColor: "red",
      };
    } else {
      borderStyle = {
        ...borderStyle,
        borderColor: "lime",
      };
    }

    return (
      <div className={Styles.registerInputBox}>
        <p>Username</p>
        <input
          type="text"
          placeholder="Input Your Username"
          name="username"
          autoComplete="off"
          value={username}
          style={borderStyle}
          onChange={(ev) => {
            inputHandler(ev);
          }}
        />
      </div>
    );
  };
  const renderNicknameInput = () => {
    const validationResult = registerController.validateNickname(nickname);
    let borderStyle: React.CSSProperties = {
      border: "1px solid black",
    };

    if (nickname.length === 0) {
      borderStyle = {
        border: "1px solid black",
      };
    } else if (validationResult.isValid === false) {
      borderStyle = {
        ...borderStyle,
        borderColor: "red",
      };
    } else {
      borderStyle = {
        ...borderStyle,
        borderColor: "lime",
      };
    }
    return (
      <div className={Styles.registerInputBox}>
        <p>Nickname</p>
        <input
          type="text"
          placeholder="Input Your Nickname"
          name="nickname"
          autoComplete="off"
          style={borderStyle}
          value={nickname}
          onChange={(ev) => {
            inputHandler(ev);
          }}
        />
      </div>
    );
  };
  const renderEmailInput = () => {
    const validationResult = registerController.validateEmail(email);
    let borderStyle: React.CSSProperties = {
      border: "1px solid black",
    };

    if (email.length === 0) {
      borderStyle = {
        border: "1px solid black",
      };
    } else if (validationResult.isValid === false) {
      borderStyle = {
        ...borderStyle,
        borderColor: "red",
      };
    } else {
      borderStyle = {
        ...borderStyle,
        borderColor: "lime",
      };
    }

    return (
      <div className={Styles.registerInputBox}>
        <p id={Styles.emailLabel}>Email</p>
        <input
          type="email"
          placeholder="Input Your Email"
          name="email"
          autoComplete="off"
          style={borderStyle}
          value={email}
          onChange={(ev) => {
            inputHandler(ev);
          }}
        />
      </div>
    );
  };
  const renderPasswordInput = () => {
    const validationResult = registerController.validatePassword(password);
    let borderStyle: React.CSSProperties = {
      border: "1px solid black",
    };

    if (password.length === 0) {
      borderStyle = {
        border: "1px solid black",
      };
    } else if (validationResult.isValid === false) {
      borderStyle = {
        ...borderStyle,
        borderColor: "red",
      };
    } else {
      borderStyle = {
        ...borderStyle,
        borderColor: "lime",
      };
    }

    return (
      <div className={Styles.registerInputBox}>
        <p>Passworrd</p>
        <input
          type="password"
          placeholder="Input Your Secret Password"
          name="password"
          style={borderStyle}
          value={password}
          onChange={(ev) => {
            inputHandler(ev);
          }}
        />
      </div>
    );
  };

  return (
    <main id="register-main-container">
      <div className={Styles.registerContainer}>
        <form className={Styles.registerForm}>
          {renderUsernameInput()}
          {renderNicknameInput()}
          {renderEmailInput()}
          {renderPasswordInput()}
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
                {RegisterModule.MonthsInputComponent()}
              </select>
              <select
                id="days"
                name="birthdayDay"
                value={day}
                onChange={(ev) => {
                  inputHandler(ev);
                }}
              >
                {RegisterModule.DaysInputComponent()}
              </select>
              <select
                id="years"
                name="birthdayYear"
                value={year}
                onChange={(ev) => {
                  inputHandler(ev);
                }}
              >
                {RegisterModule.YearsInputComponent()}
              </select>
            </div>
          </div>
          <div className={Styles.registerControls}>
            <button
              className={Styles.registerBtn}
              id="register-btn"
              style={{}}
              onClick={async (ev) => {
                await submitHandler(ev);
              }}
            >
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
