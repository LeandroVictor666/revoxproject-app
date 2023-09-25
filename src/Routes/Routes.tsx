import * as ReactRouter from "react-router-dom";
import HomePage from "../Views/Home/HomePage";
import Login from "../Views/Login/Login";

const AppRoutes = ReactRouter.createBrowserRouter([
  {
    path: "/",
    element: HomePage(),
  },
  {
    path: "/login",
    element: Login(),
  },
]);

export default AppRoutes;
