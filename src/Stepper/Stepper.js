// import * as React from "react";
import Box from '@mui/material/Box'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
// import "date-fns";
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers'

// import "../../styles/board-styling.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Card } from '@themesberg/react-bootstrap'

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import AddIcon from '@material-ui/icons/Add'
import Container from '@mui/material/Container'
import TextField from '../Component/TextField'
import ApplicantsRequirement from '../Component/ApplicantsRequirement'
import { makeStyles } from '@mui/styles'
import Quota from '../Component/Quota'
import PhaseComponent from '../Component/PhaseComponent'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import ResultDataSyncronization from '../Component/ResultDataSyncronization'

const steps = [
  {
    label: 'Application Configuration',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`
  },
  {
    label: 'Quota metadata management',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.'
  },
  {
    label: 'Phases of Application Processing',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
  },
  {
    label: 'Result Data Syncronization Criteria'
  }
]
const useStyles = makeStyles({
  root: {
    // background: "#17A5CE",
    // backgroundColor: "#17A5CE",
    // backgroundColor: "#000",
    borderRadius: '7px',
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    textAlign: 'center',
    fontSize: '16 px',
    '& .MuiButton-contained': {
      backgroundColor: '#17A5CE',
      color: '#17A5CE'
    }
  },
  step: {
    // .MuiSvgIcon-root .MuiStepIcon-root
    '&  .MuiStepIcon-root.MuiStepIcon-active': {
      color: '#17A5CE',
      // backgroundColor: '#17A5CE'
      fontSize: '30px',
      marginLeft: '-3px'
    },
    '& .MuiStepIcon-root.MuiStepIcon-completed': {
      color: '#17A5CE',
      fontSize: '30px',
      marginLeft: '-3px'
    },
    '& .MuiStepLabel-label.MuiStepLabel-disabled': {
      fontSize: '30px',
      marginLeft: '-3px'
    },
    '.MuiStepIcon-root.MuiStepIcon-disabled': {
      fontSize: '30px',
      marginLeft: '-3px'
    }
  },
  stepLabel: {
    '& .MuiStepLabel-label.MuiStepLabel-active': {
      fontWeight: 'bold'
    },
    '& .MuiStepLabel-label.MuiStepLabel-completed': {
      fontWeight: 'bold'
    },
    '& .MuiStepLabel-label.MuiStepLabel-disabled': {
      fontSize: '30px',
      marginLeft: '-3px'
    },
    '.MuiStepIcon-root.MuiStepIcon-disabled': {
      fontSize: '30px',
      marginLeft: '-3px'
    }
  }
})
export default function VerticalLinearStepper () {
  const [activeStep, setActiveStep] = React.useState(3)
  const buttonClasses = useStyles()

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div style={{ marginLeft: '100px' }}>
      <Breadcrumbs
        aria-label='breadcrumb'
        separator={
          <DoubleArrowIcon
            size='small'
            style={{ width: '100%', color: 'rgba(160, 154, 157, 0.8)' }}
          />
        }
        style={{ margin: '10px 0px 0px 15px' }}
      >
        <Link underline='hover' color='primary' href='/'>
          Settings
        </Link>
        {/* <Link
          underline='hover'
          color='primary'
          href='/getting-started/installation/'
        >
          Create Announcements
        </Link> */}
      </Breadcrumbs>

      <Paper style={{ margin: '20px' }} elevation='4'>
        <h3 style={{ letterSpacing: '10', padding: '20px 0px 0px 20px' }}>
          Settings
        </h3>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((step, index) => (
              <Step key={step.label} className={buttonClasses.step}>
                <StepLabel
                  className={buttonClasses.stepLabel}
                  // style={{ marginBottom: '10px' }}
                  // optional={
                  //   index === 2 ? (
                  //     <Typography variant='caption'>Last step</Typography>
                  //   ) : null
                  // }
                >
                  <span style={{ marginLeft: '15px' }}>{step.label}</span>
                  {/* <TextField /> */}
                </StepLabel>

                <StepContent>
                  {index === 0 && (
                    <Container
                      maxWidth='100%'
                      style={{
                        marginLeft: '-10px',
                        marginTop: '20px'
                        // marginRight: "-10px",
                        // paddingRight: "-50px",
                        // backgroundColor: "black",
                        // color: "red",
                      }}
                    >
                      <ApplicantsRequirement />
                    </Container>
                  )}
                  {index === 1 && (
                    <Container
                      maxWidth='100%'
                      style={{
                        marginLeft: '-10px',
                        marginTop: '10px'

                        // marginRight: "-10px",
                        // paddingRight: "-50px",
                        // backgroundColor: "black",
                        // color: "red",
                      }}
                    >
                      <Quota />
                    </Container>
                  )}
                  {index === 2 && (
                    <Container
                      maxWidth='100%'
                      style={{
                        marginTop: '20px'
                        // marginLeft: '-10px'
                        // marginRight: "-10px",
                        // paddingRight: "-50px",
                        // backgroundColor: "black",
                        // color: "red",
                      }}
                    >
                      <PhaseComponent />
                    </Container>
                  )}

                  {index === 3 && (
                    <Container
                      maxWidth='100%'
                      style={{
                        marginTop: '20px'
                        // marginLeft: '-10px'
                        // marginRight: "-10px",
                        // paddingRight: "-50px",
                        // backgroundColor: "black",
                        // color: "red",
                      }}
                    >
                      <ResultDataSyncronization />
                    </Container>
                  )}

                  <Container
                    maxWidth='100%'
                    style={{ marginTop: '20px', marginLeft: '-10px' }}
                  >
                    <Button
                      variant='outlined'
                      disabled={index === 0}
                      onClick={handleBack}
                      style={{
                        borderRadius: '7px',
                        backgroundColor: '#fff',
                        padding: '18px 36px',
                        width: '100px',
                        height: '45px',
                        color: '#A9A9A9',
                        textAlign: 'center',
                        fontFamily: 'open-sans',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        lineHeight: '22px',
                        borderWidth: '1px',
                        borderColor: '#A9A9A9'
                        // marginLeft: "20px",
                        // fontSize: "18px",
                      }}
                      sx={{ mt: 1, mr: 1 }}
                      // className={buttonClasses.root}
                    >
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      onClick={handleNext}
                      style={{
                        borderRadius: '7px',
                        backgroundColor: '#17A5CE',
                        padding: '18px 36px',

                        width: '100px',
                        height: '45px',
                        color: 'white',
                        textAlign: 'center',
                        fontFamily: 'open-sans',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        lineHeight: '22px',
                        marginLeft: '20px'
                        // fontSize: "18px",
                      }}
                      // color="primary"
                      sx={{ mt: 1, ml: 20 }}
                      className={buttonClasses.root}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Container>
                </StepContent>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length && (
            <Paper
              square
              elevation={0}
              style={{ marginLeft: '20px', paddingBottom: '30px' }}
            >
              <Typography style={{ marginBottom: '20px' }}>
                All steps completed - Do you want to save the Announcements?
              </Typography>

              <Button
                // startIcon={<AddIcon />}
                // color='primary'
                style={{
                  color: '#17A5CE',
                  padding: '18px 36px',
                  borderRadius: '7px',
                  // marginTop: '20px',
                  border: '1.5px solid #17A5CE',
                  letterSpacing: '.75px',
                  fontWeight: '700'
                }}
                sx={{ mt: 1, ml: 20 }}
                variant='outlined'
                onClick={handleReset}
                className={buttonClasses.root}
              >
                Reset
              </Button>
              <Button
                variant='contained'
                onClick={handleNext}
                style={{
                  borderRadius: '7px',
                  backgroundColor: '#17A5CE',
                  padding: '18px 36px',

                  // width: '100px',
                  // height: '45px',,
                  color: 'white',

                  textAlign: 'center',
                  fontFamily: 'open-sans',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  lineHeight: '22px',
                  marginLeft: '20px'
                  // fontSize: "18px",
                }}
                // style={{ color: 'white' }}
                // color="primary"
                sx={{ mt: 1, ml: 20 }}
                className={buttonClasses.root}
              >
                Save
              </Button>
            </Paper>
          )}
        </Box>
      </Paper>
    </div>
  )
}
