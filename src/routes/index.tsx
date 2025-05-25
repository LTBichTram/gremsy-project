import { createBrowserRouter } from "react-router-dom";
import Systems from "../pages/Systems";
import { path } from "./path";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import MavLink from "../pages/MavLink";
import Gimbal from "../pages/Gimbal";
import IrCamera from "../pages/IrCamera";
import MediaFiles from "../pages/MediaFiles";
import RemoteChannels from "../pages/RemoteChannels";
import CustomModels from "../pages/CustomModels";
import OTAUpdate from "../pages/OTAUpdate";

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
      {
        path: path.mavlink,
        element: <MavLink />,
      },
      {
        path: path.gimbal,
        element: <Gimbal />,
      },
      {
        path: path.irCamera,
        element: <IrCamera />,
      },
      {
        path: path.listFile,
        element: <MediaFiles />,
      },
      {
        path: path.sbusChanels,
        element: <RemoteChannels />,
      },
      {
        path: path.customModels,
        element: <CustomModels />,
      },
      {
        path: path.updateOta,
        element: <OTAUpdate />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
