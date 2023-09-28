import { RouterProvider } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import "./Styles/global.css";
import Header from "./Components/Header/Header";
import * as ReactRedux from "react-redux";
import store from "./Redux/Store";
import ModalComponent from "./Components/Modal/ModalComponent";
function App() {
  return (
    <>
      <ReactRedux.Provider store={store}>
        <ModalComponent></ModalComponent>
        <Header></Header>
        <RouterProvider router={AppRoutes} />
      </ReactRedux.Provider>
    </>
  );
}

export default App;
