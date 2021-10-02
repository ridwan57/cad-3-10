// import * as React from "react";
import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

// import "../../styles/board-styling.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Card } from "@themesberg/react-bootstrap";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AddIcon from "@material-ui/icons/Add";
import Container from "@mui/material/Container";
import TextField from "../Component/TextField";
import ApplicantsRequirement from "../Component/ApplicantsRequirement";
import { makeStyles } from "@mui/styles";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];
const useStyles = makeStyles({
  root: {
    // background: "#17A5CE",
    // backgroundColor: "#17A5CE",
    // backgroundColor: "#000",
    borderRadius: "7px",
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    textAlign: "center",
    fontSize: "16 px",
    "& .MuiButton-contained": {
      backgroundColor: "#17A5CE",
      color: "#17A5CE",
    },
  },
});
export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const buttonClasses = useStyles();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: "red" }}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          style={{ color: "#17A5CE" }}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
                {/* <TextField /> */}
              </StepLabel>

              <StepContent>
                {index === 0 ? (
                  <Container
                    maxWidth="100%"
                    style={{
                      marginLeft: "-10px",
                      // marginRight: "-10px",
                      // paddingRight: "-50px",
                      // backgroundColor: "black",
                      // color: "red",
                    }}
                  >
                    <ApplicantsRequirement />
                  </Container>
                ) : (
                  <>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div></div>
                    </Box>
                  </>
                )}
                <Container
                  maxWidth="100%"
                  style={{ marginTop: "20px", marginLeft: "-10px" }}
                >
                  <Button
                    variant="outlined"
                    disabled={index === 0}
                    onClick={handleBack}
                    style={{
                      borderRadius: "7px",
                      backgroundColor: "#fff",
                      padding: "18px 36px",
                      width: "100px",
                      height: "45px",
                      color: "#A9A9A9",
                      textAlign: "center",
                      fontFamily: "open-sans",
                      fontWeight: "bold",
                      fontSize: "16px",
                      lineHeight: "22px",
                      borderWidth: "1px",
                      borderColor: "#A9A9A9",
                      // marginLeft: "20px",
                      // fontSize: "18px",
                    }}
                    sx={{ mt: 1, mr: 1 }}
                    // className={buttonClasses.root}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    style={{
                      borderRadius: "7px",
                      backgroundColor: "#17A5CE",
                      padding: "18px 36px",

                      width: "100px",
                      height: "45px",
                      color: "white",
                      textAlign: "center",
                      fontFamily: "open-sans",
                      fontWeight: "bold",
                      fontSize: "16px",
                      lineHeight: "22px",
                      marginLeft: "20px",
                      // fontSize: "18px",
                    }}
                    // color="primary"
                    sx={{ mt: 1, ml: 20 }}
                    className={buttonClasses.root}
                  >
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Container>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </>
  );
}
