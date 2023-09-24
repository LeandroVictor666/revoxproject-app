import Styles from "../../Styles/app.module.css";

const Header = (): JSX.Element => {
  return (
    <header>
      <div className={Styles.firstSection}>
        <p>RevoXProject</p>
      </div>
      <div className={Styles.lastSection}>
        <nav>
          <a href="/login" id="login-btn">
            Login
          </a>
          <a href="/register" style={{ marginLeft: "16px" }}>
            Register
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
