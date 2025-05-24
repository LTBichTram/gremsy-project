import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

const theme = createTheme({
  colors: {
    primary: [
      "#199fda",
      "#199fda",
      "#199fda",
      "#199fda",
      "#199fda",
      "#199fda",
      "#199fda",
      "#199fda",
      "#199fda",
      "#199fda",
    ],
  },
  primaryColor: "primary",
  other: {
    maxWidth: "1440px",
    containerPadding: {
      xs: "16px",
      sm: "16px",
      md: "16px",
      lg: "16px",
      xl: "16px",
    },
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <RouterProvider router={routes} />
    </MantineProvider>
  );
}

export default App;
