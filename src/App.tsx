import { RouterProvider } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import globalStyle from "./Styles/global.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <RouterProvider router={AppRoutes} />
    </>
  );
}

export default App;
