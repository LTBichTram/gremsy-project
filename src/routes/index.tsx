import { createBrowserRouter } from "react-router-dom";
import Systems from "../pages/Systems";
import { path } from "./path";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    path: path.home,
    element: <Home />,
  },
  {
    path: path.systems,
    element: <Systems />,
  },
]);
