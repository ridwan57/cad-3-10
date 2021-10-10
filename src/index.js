import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@material-ui/core/Typography'

import Stepper from './Stepper/Stepper'
import ApplicantsRequirement from './Component/ApplicantsRequirement'

import {
  Breadcrumb,
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  Button,
  Modal,
  FormControl,
  InputGroup,
  Form,
  DropdownButton,
  Dropdown,
  Navbar,
  Nav,
  NavDropdown,
  Accordion,
  ProgressBar,
  Table
} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const theme = createTheme({
  typography: {
    fontFamily: ['open-sans'].join(',')
  }
})
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div style={{ marginLeft: '100px' }}>
        <Stepper />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
