import Styles from "../../Styles/app.module.css";
const LoginView = (): JSX.Element => {
  return (
    <div className={Styles.loginContainer}>
      <form className={Styles.loginForm}>
        <div className={`${Styles.usernameInputBox} ${Styles.loginInputBox}`}>
          <p>Username</p>
          <input
            type="text"
            name="username"
            placeholder="Input Your Username"
            autoComplete="off"
          />
        </div>
        <div className={`${Styles.passwordInputBox} ${Styles.loginInputBox}`}>
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Input Your Secret Password!"
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
