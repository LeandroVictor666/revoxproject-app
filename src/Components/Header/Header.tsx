import Styles from "../../Styles/app.module.css";
const Header = (): JSX.Element => {
  return (
    <header>
      <div className={Styles.firstSection}>
        <p>RevoXProject</p>
      </div>
      <div className={Styles.lastSection}>
        <nav>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
