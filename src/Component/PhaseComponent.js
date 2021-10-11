import React, { useState } from 'react'

import { Grid, Container, Button } from '@material-ui/core'
import 'date-fns'
import { makeStyles } from '@material-ui/styles'

import { DateComponent, TimeComponent } from './DataTimeComponent'
import AddIcon from '@mui/icons-material/Add'

import Fab from '@mui/material/Fab'
import { Collapse, Dialog, DialogTitle } from '@mui/material'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const useStyles = makeStyles({
  keyboardPicker: {
    '& label.Mui-focused': {
      color: '#17A5CE',
      padding: '2px 10px 0px 10px',
      letterSpacing: '.9px',
      // backgroundColor: 'red',
      // position: 'relative',
      // width: '80px'
      top: '-5px',

      // color: "red",
      backgroundColor: 'white'
    },

    '& .MuiInputBase-input': {
      padding: '6px 17px'
      //   width: '100%'
    },
    '& .MuiOutlinedInput-root': {
      // color: "#17A5CE",
      // - The Input-root, inside the TextField-root
      '& fieldset': {
        // - The <fieldset> inside the Input-root
        // borderColor: "pink", // - Set the Input border
      },
      '&:hover fieldset': {
        // borderColor: "yellow", // - Set the Input border when parent has :hover
      },
      '&.Mui-focused fieldset': {
        // - Set the Input border when parent is focused
        // borderColor: "green",
        border: '1px solid #C7C7C7'
      }
    }
  }
})

// .MuiOutlinedInput-input
const PhaseComponent = () => {
  const tasks = [
    { title: 'Accepting Applications' },
    { title: 'Migration result publishing' },
    { title: 'Selecttion confirmatin by aplicant' }
  ]
  const classes = useStyles()
  const phases = [1, 2]
  const [id, setId] = React.useState(1)
  const [openDialog, setOpenDialog] = useState(true)
  const handleChange = id => {
    setId(id)
  }

  return (
    <>
      {phases.map((phase, i) => (
        <Container style={{ border: '1px solid #c7c7c7', marginLeft: '15px' }}>
          <div
            className='d-flex justify-content-around mt-3 p-2'
            style={{ backgroundColor: `${i === id ? '#E2E2E2' : '#fff'}` }}
          >
            <h5 className='d-inline-block'>Phases {i + 1} </h5>
            {id !== i ? (
              <Fab
                disableRipple
                onClick={e => {
                  if (id === i) {
                    setId(null)
                  } else setId(i)
                }}
                sx={{
                  backgroundColor: 'white',
                  boxShadow: 'none'
                }}
                style={{ marginLeft: 'auto', display: 'inline-block' }}
                size='small'
              >
                <KeyboardArrowDownIcon

                // style={{ width: '0.88em', height: '0.88em' }}
                />
              </Fab>
            ) : (
              <Fab
                disableRipple
                onClick={e => {
                  if (id === i) {
                    setId(null)
                  } else setId(i)
                }}
                sx={{
                  backgroundColor: 'white',
                  boxShadow: 'none'
                }}
                style={{ marginLeft: 'auto', display: 'inline-block' }}
                size='small'
              >
                <KeyboardArrowUpIcon

                // style={{ width: '0.88em', height: '0.88em' }}
                />
              </Fab>
            )}
          </div>
          <Collapse
            // collapsedSize='large'
            in={i === id}
            xs={{}}
            className={classes.collapseStyle}
          >
            {tasks.map((task, j) => (
              <>
                <span className='h4'>Task {j + 1}: </span>

                <span style={{ color: '#17A5CE', marginLeft: '15px' }}>
                  {task.title}
                </span>
                <Container
                  fluid
                  style={{
                    padding: '20px 250px 15px 250px',
                    margin: '10px 0px 10px 0px',
                    borderBottom: '1px solid #c7c7c7'
                  }}
                >
                  <Grid fluid container spacing='1' style={{ gap: 6 }}>
                    <Grid item xs={5}>
                      <DateComponent />
                    </Grid>
                    <Grid item xs={5}>
                      <TimeComponent />
                    </Grid>
                    <Grid item xs='10' style={{ textAlign: 'center' }}>
                      To
                    </Grid>

                    <Grid item xs={5}>
                      <DateComponent />
                    </Grid>
                    <Grid item xs={5}>
                      <TimeComponent />
                    </Grid>
                  </Grid>
                </Container>
              </>
            ))}
          </Collapse>
        </Container>
      ))}
      <Button
        className='text-capitalize'
        startIcon={<AddIcon />}
        // color='primary'
        style={{
          color: '#17A5CE',

          marginTop: '20px',
          marginLeft: '15px',
          border: '1.5px solid #17A5CE',
          letterSpacing: '.75px',
          fontWeight: '700'
        }}
        variant='outlined'
        // onClick={() => setOpenDialog(true)}
      >
        Add another Phase
      </Button>
    </>
  )
}

export default PhaseComponent
