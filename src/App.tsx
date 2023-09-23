import { RouterProvider } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import globalStyle from "./Styles/global.css";

function App() {
  return (
    <>
      <RouterProvider router={AppRoutes} />
    </>
  );
}

export default App;
