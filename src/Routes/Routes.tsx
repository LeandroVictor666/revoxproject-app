import * as ReactRouter from "react-router-dom";
import HomePage from "../Views/Home/HomePage";

const AppRoutes = ReactRouter.createBrowserRouter([
  {
    path: "/",
    element: HomePage(),
  },
]);

export default AppRoutes;
