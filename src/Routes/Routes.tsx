import * as ReactRouter from "react-router-dom";
import HomePageView from "../Views/Home/HomePageView";
import * as LoginModule from "../Modules/Login.Module";
import * as RegisterModule from "../Modules/Register.Module";
import NotFound from "../Views/404/NotFound";
import * as ProfileModule from "../Modules/Profile.module";

const AppRoutes = ReactRouter.createBrowserRouter([
  {
    path: "/",
    element: <HomePageView />,
  },
  {
    path: "/login",
    element: <LoginModule.View />,
  },
  {
    path: "/register",
    element: <RegisterModule.View />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/profile/:profileId",
    element: <ProfileModule.View />,
  },
]);

export default AppRoutes;
