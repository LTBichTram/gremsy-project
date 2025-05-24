import { createBrowserRouter } from "react-router-dom";
import Systems from "../pages/Systems";
import { path } from "./path";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: path.home,
        element: <Home />,
      },
      {
        path: path.systems,
        element: <Systems />,
      },
    ],
  },
]);
