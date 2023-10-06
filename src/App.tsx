import { RouterProvider } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import "./Styles/global.css";
import Header from "./Components/Header/Header";
import * as ReactRedux from "react-redux";
import store from "./Redux/Store";
import ModalComponent from "./Components/Modal/ModalComponent";
import AuthenticationService from "./Services/Authentication.Service";

/**
 * This function is just to auth the user.
 * @returns nothing
 */
const AuthSection = () => {
  const dispatcher = ReactRedux.useDispatch();
  const authenticationService = new AuthenticationService();
  authenticationService.propagateAuthentication(dispatcher);
  return <></>;
};

function App() {
  return (
    <>
      <ReactRedux.Provider store={store}>
        <AuthSection></AuthSection>
        <ModalComponent></ModalComponent>
        <Header></Header>
        <RouterProvider router={AppRoutes} />
      </ReactRedux.Provider>
    </>
  );
}

export default App;
