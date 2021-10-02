import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stepper from "./Stepper/Stepper";
import ApplicantsRequirement from "./Component/ApplicantsRequirement";

const theme = createTheme({
  typography: {
    fontFamily: [
      "open-sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  // overrides: {
  //   MuiButton: {
  //     raisedPrimary: {
  //       color: "#17A5CE",
  //     },
  //   },
  // },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <ApplicantsRequirement /> */}
      <Stepper />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
