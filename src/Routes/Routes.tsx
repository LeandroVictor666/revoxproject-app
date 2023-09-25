import * as ReactRouter from "react-router-dom";
import HomePage from "../Views/Home/HomePage";
import Login from "../Views/Login/Login";
import Register from "../Views/Register/Register";

const AppRoutes = ReactRouter.createBrowserRouter([
  {
    path: "/",
    element: HomePage(),
  },
  {
    path: "/login",
    element: Login(),
  },
  {
    path: "/register",
    element: Register(),
  },
]);

export default AppRoutes;
