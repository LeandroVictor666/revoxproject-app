import { RouterProvider } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
function App() {

  return (
    <>
    <RouterProvider router={AppRoutes}/>
    </>
  )
}

export default App
