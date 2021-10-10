import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@material-ui/core/Typography'

import Stepper from './Stepper/Stepper'
import ApplicantsRequirement from './Component/ApplicantsRequirement'

const theme = createTheme({
  typography: {
    fontFamily: ['open-sans'].join(',')
  }
})
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Stepper />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
