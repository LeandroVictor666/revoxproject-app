import Styles from "../../Styles/app.module.css";
const Login = (): JSX.Element => {
  return (
    <div className={Styles.loginContainer}>
      <form className={Styles.loginForm}>
        <div className={Styles.loginInputBox}>
          <p>Username</p>
          <input type="text" name="username" />
        </div>
        <div className={Styles.loginInputBox}>
          <p>Password</p>
          <input type="password" name="password" />
        </div>
      </form>
    </div>
  );
};

export default Login;
