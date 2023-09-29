import * as ReactRouter from "react-router-dom";
import HomePageView from "../Views/Home/HomePageView";
import LoginView from "../Views/Login/LoginView";
import RegisterView from "../Views/Register/RegisterView";
import NotFound from "../Views/404/NotFound";

const AppRoutes = ReactRouter.createBrowserRouter([
  {
    path: "/",
    element: <HomePageView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/register",
    element: <RegisterView />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default AppRoutes;
