import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Stepper from './Stepper/Stepper'
import ApplicantsRequirement from './Component/ApplicantsRequirement'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import 'bootstrap/dist/css/bootstrap.min.css'

const theme = createTheme({
  overrides: {
    MuiSelect: {
      select: {
        '&:focus': {
          background: '$labelcolor'
        }
      }
    }
  },
  typography: {
    fontFamily: ['open-sans'].join(',')
  }
})
ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <div style={{ marginLeft: '150px' }}>
          <Stepper />
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
