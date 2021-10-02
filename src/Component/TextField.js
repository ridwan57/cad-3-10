import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

import { makeStyles } from "@mui/styles";

{
  /* <span className={classes.spanText}>ssc pass year for general</span> */
}
// '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
//             '& fieldset': {            // - The <fieldset> inside the Input-root
//                 borderColor: 'pink',   // - Set the Input border
//             },
//             '&:hover fieldset': {
//                 borderColor: 'yellow', // - Set the Input border when parent has :hover
//             },
//             '&.Mui-focused fieldset': { // - Set the Input border when parent is focused
//                 borderColor: 'green',
//             },
// },
function ColorTextFields(props) {
  const useStyles = makeStyles({
    root: {
      // - The TextField-root
      // border: "1px solid #C7C7C7", // - For demonstration: set the TextField-root border
      // padding: "3px", // - Make the border more distinguishable

      // (Note: space or no space after & matters. See SASS "parent selector".)
      //   fontFamily: [
      //   '-apple-system',
      //   'BlinkMacSystemFont',
      //   '"Segoe UI"',
      //   'Roboto',
      //   '"Helvetica Neue"',
      //   'Arial',
      //   'sans-serif',
      //   '"Apple Color Emoji"',
      //   '"Segoe UI Emoji"',
      //   '"Segoe UI Symbol"',
      // ].join(',')
      "& label.Mui-focused": {
        color: "#17A5CE",
        padding: "2px 10px 0px 5px",
        letterSpacing: ".9px",

        // color: "red",
        backgroundColor: "white",
      },
      "& .MuiOutlinedInput": {},
      "& .MuiInputBase-input": {
        padding: "10px 17px",
        maxWidth: "300px",
      },
      "& .MuiOutlinedInput-root": {
        // color: "#17A5CE",
        // - The Input-root, inside the TextField-root
        "& fieldset": {
          // - The <fieldset> inside the Input-root
          // borderColor: "pink", // - Set the Input border
        },
        "&:hover fieldset": {
          // borderColor: "yellow", // - Set the Input border when parent has :hover
        },
        "&.Mui-focused fieldset": {
          // - Set the Input border when parent is focused
          // borderColor: "green",
          border: "1px solid #C7C7C7",
        },
      },
    },
  });

  console.log("props:", props);
  const {
    placeHolderName = "Default",
    titleName = "Default",
    width = "auto",
  } = props;
  const classes = useStyles();
  return (
    <TextField
      label={`${titleName}`}
      color="primary"
      id=
      // style={{ color: "blue" }}
      style={{
        // width: `${width}`,
        // fontFamily: "open-sans",
        padding: "0",
        // border: "1px solid #C7C7C7",
      }}
      fullWidth
      className={classes.root}
      // color='se'
      focused
      placeholder={`${placeHolderName}`}
    />
  );
}
function SpanText(props) {
  const useStyles = makeStyles({
    spanText: {
      fontFamily: "Open-Sans",
      fontStyle: "Regular",
      fontSize: "16px",
      lineHeight: "25px",
      letterSpacing: "0.75px",

      /* light text */

      color: "#717171",
    },
  });
  // console.log("props:", props);
  const classes = useStyles();
  const { text = "default" } = props;

  return <span className={classes.spanText}>{text}</span>;
}

export { SpanText, ColorTextFields };
