import Styles from "../../Styles/app.module.css";
import * as React from "react";
import * as ReactRedux from "react-redux";
import * as LoginModule from "../../Modules/Login.Module";
const LoginView = (): JSX.Element => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const dispatcher = ReactRedux.useDispatch();
  const inputHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    switch (ev.target.getAttribute("name")) {
      case "username": {
        setUsername(ev.target.value);
        break;
      }
      case "password": {
        setPassword(ev.target.value);
        break;
      }
    }
  };
  const callToLoginFn = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    LoginModule.ViewFunctions.callToLoginFunction(
      { username, password },
      dispatcher
    );
    return;
  };

  return (
    <div className={Styles.loginContainer}>
      <form
        className={Styles.loginForm}
        method="post"
        onSubmit={(ev) => {
          callToLoginFn(ev);
        }}
      >
        <div className={`${Styles.usernameInputBox} ${Styles.loginInputBox}`}>
          <p>Username</p>
          <input
            type="text"
            name="username"
            placeholder="Input Your Username"
            autoComplete="off"
            value={username}
            onChange={(ev) => {
              inputHandler(ev);
            }}
          />
        </div>
        <div className={`${Styles.passwordInputBox} ${Styles.loginInputBox}`}>
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Input Your Secret Password!"
            value={password}
            onChange={(ev) => {
              inputHandler(ev);
            }}
          />
        </div>
        <input type="submit" style={{ display: "none" }} />

        <div className={Styles.loginControls}>
          <button className={Styles.loginBtn}>
            <p>Login</p>
          </button>
          <a href="forgot-password" id={Styles.forgotPasswordId}>
            Forgot Password?
          </a>
          <div className={Styles.bottomControls}>
            <div className={Styles.horizontalLine}></div>
            <button className={Styles.registerBtn}>
              <p>Create New Account</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginView;
