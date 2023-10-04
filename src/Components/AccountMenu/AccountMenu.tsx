import { useSelector } from "react-redux";
import { IReducerProps } from "../../Redux/Store";
// import { showAccountMenu } from "../../Redux/AccountMenu.redux";
import Styles from "../../Styles/app.module.css";
import AccountMenuHeader from "./AccountMenuHeader";
import AccountMenuBody from "./AccountMenuBody";
import AccountMenuServerSection from "./AccountMenuServerSection";
import { AccountMenuLastSection } from "./AccountMenuLastSection";

const AccountMenu = (): JSX.Element => {
  const menuState = useSelector((state: IReducerProps) => state.accountMenu);
  //   const authenticationState = useSelector(
  //     (state: IReducerProps) => state.accountAuth
  //   );

  if (menuState.isActive === false) {
    return <></>;
  }
  return (
    <div className={Styles.accountMenuContainerFixer}>
      <div className={Styles.accountMenuContainer}>
        <AccountMenuHeader />
        <div className={Styles.horizontalLine} id={Styles.headerLine}></div>
        <AccountMenuBody />
        <div className={`${Styles.horizontalLine} ${Styles.blackLine}`}></div>
        <AccountMenuServerSection />
        <div className={`${Styles.horizontalLine} ${Styles.blackLine}`}></div>
        <AccountMenuLastSection />
      </div>
    </div>
  );
};
export default AccountMenu;
