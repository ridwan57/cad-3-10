import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Table } from 'react-bootstrap'
import {
  Checkbox,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core'
// import { containerClasses, IconButton, TextField } from '@mui/material'
import Fab from '@mui/material/Fab'
import { Collapse, Dialog, DialogTitle, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { makeStyles } from '@mui/styles'
import { ColorTextFields } from './TextField'

const useStyles = makeStyles({
  collapseStyle: {
    '& .MuiCollapse-wrapper': {
      // color: '#17A5CE',
      // backgroundColor: '#17A5CE',
      width: '50%',
      margin: '10px 30px 10px 40px'
    }
  },
  dialog: {
    '& .css-m9glnp-MuiPaper-root-MuiDialog-paper': {
      borderRadius: '10px',
      // border: '1px solid rgba(0,0,0,.25)',
      // border: '1px solid #999A9B',
      boxShadow: '-5px -5px rgba(0, 0, 0, 0.05), 5px 5px rgba(0, 0, 0, 0.05)'
      // boxShadow: '5px 5px #888888',
    }
  },
  btn: {
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
  textField: {
    '& label.Mui-focused': {
      color: '#17A5CE',
      padding: '2px 10px 0px 10px',
      letterSpacing: '.75px',
      // backgroundColor: 'red',
      // position: 'relative',
      // width: '80px',
      fontSize: '20px',
      top: '-9px',

      // color: "red",
      backgroundColor: 'white'
    },
    '& .MuiOutlinedInput': {},
    '& .MuiInputBase-input': {
      // padding: '4px 17px',
      marginTop: '-10px'
      // maxWidth: '300px',
      // backgroundColor: 'blue'
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

const quotas = [
  {
    id: 1,
    name: 'freedom',
    percentage: 20,
    unSeats: 12,
    q: ['G']
  },
  {
    id: 2,
    name: 'freedom',
    percentage: 20,
    unSeats: 12,
    q: ['S']
  },
  {
    id: 3,
    name: 'freedom',
    percentage: 20,
    unSeats: 12,
    q: ['G']
  }
]

const Quota = () => {
  const classes = useStyles()
  const [id, setId] = React.useState(0)
  const [openDialog, setOpenDialog] = useState(true)
  const handleChange = id => {
    setId(id)
  }
  return (
    <>
      {/* Dialog box */}

      <Dialog
        open={openDialog}
        className={classes.dialog}
        onClose={() => setOpenDialog(false)}
        sx={{
          width: '50vw',
          height: '50vh',
          m: 'auto auto',

          p: 2
        }}
        fullScreen
      >
        <DialogTitle>Add Quota</DialogTitle>
        <>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  className={classes.textField}
                  fullWidth
                  focused
                  label='Quota Name'
                  placeholdre='Enter your text here'
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant='standard'>
                  <TextField
                    select
                    label='Quota Type'
                    className={classes.textField}
                    fullWidth
                    focused
                    // sx={{ width: '100%' }}
                    SelectProps={{
                      multiple: true,
                      value: []
                    }}
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'general'}>General</MenuItem>
                    <MenuItem value={'special'}>Special</MenuItem>
                  </TextField>
                </FormControl>

                {/* <TextField
                  className={classes.textField}
                  // sx={{ marginLeft: '10px', width: '40%' }}
                  fullWidth
                  focused
                  label='Quota Type'
                  placeholdre='Enter from DropDown'
                  InputProps={{ endAdornment: <KeyboardArrowDownIcon /> }}
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  multiline
                  rows={4}
                  fullWidth
                  focused
                  label='Description'
                  value='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
                />
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Button
                  variant='outlined'
                  // sx={{ color: '#17A5CE' }}
                  // color='primary'
                  style={{
                    backgroundColor: 'white',
                    color: 'red',
                    textTransform: 'capitalize',
                    width: '90%',
                    borderRadius: '7px',
                    border: '1px solid red'
                  }}
                  onClick={() => setOpenDialog(false)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant='contained'
                  color='success'
                  // sx={{ color: '#17A5CE' }}
                  // color='primary'
                  style={{
                    backgroundColor: '#17A5CE',
                    color: 'white',
                    textTransform: 'capitalize',
                    width: '90%',
                    borderRadius: '7px'
                  }}
                  onClick={() => setOpenDialog(false)}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Container>
        </>
      </Dialog>

      {/* Dialog box */}

      <Table
        borderless
        responsive
        // bordered

        className='table-centered rounded mb-0 overflow-hidden text-center'
        style={{ borderSpacing: 0, borderCollapse: 'separate' }}
      >
        <thead
          className='thead-light'
          style={{
            letterSpacing: '.75px',
            fontWeight: 600,
            marginBottom: '10px'
          }}
        >
          <tr
            className='mb-100'
            data-toggle='collapse'
            data-target='#demo1'
            class='accordion-toggle'
          >
            <th className='border-0 '>ID</th>
            <th className='border-0 '>Quota Name</th>
            <th className='border-0'>Percentage</th>
            <th className='border-0'>Unallocated Seats</th>
            <th className='border-0'>General</th>
            <th className='border-0'>Special</th>
            <th className='border-0'>Priority</th>
            <th className='border-0 w-30'></th>
          </tr>
        </thead>
        {quotas.map((eachQuota, i) => (
          <>
            <tr
              style={{
                backgroundColor: `${
                  id === eachQuota.id
                    ? '#E2E2E2'
                    : i % 2 === 0
                    ? '#EAFAFF'
                    : '#fff'
                }`,
                height: '60px'
                // border: '1px solid #C7c7c7'
              }}
              className='border-2'
            >
              <td>{eachQuota.id}</td>
              <td>{eachQuota.name}</td>
              <td>
                <div
                  style={{
                    height: '80%',
                    width: '60%',
                    margin: '0 auto',
                    borderRadius: '7px',
                    border: '1px solid #C7c7c7',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  {eachQuota.percentage}%
                </div>
              </td>
              <td>
                <div
                  style={{
                    height: '80%',
                    width: '40%',
                    margin: '0 auto',
                    borderRadius: '7px',
                    border: '1px solid #C7c7c7',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  {eachQuota.unSeats}
                </div>
              </td>
              <td>
                <Checkbox
                  style={{
                    color: eachQuota.q.includes('G') ? '#17A5CE' : null
                  }}
                  checked={eachQuota.q.includes('G')}
                ></Checkbox>
              </td>
              <td>
                <Checkbox
                  style={{
                    color: eachQuota.q.includes('S') ? '#17A5CE' : null
                  }}
                  checked={eachQuota.q.includes('S')}
                  onClick={e => {
                    console.log(e.target.checked)
                  }}
                ></Checkbox>
              </td>
              <td>
                <Fab
                  sx={{ backgroundColor: 'rgba(106,106,106,0.15)' }}
                  size='small'
                >
                  <KeyboardArrowDownIcon
                    style={{ width: '0.88em', height: '0.88em' }}
                  />
                </Fab>
                <Fab sx={{ backgroundColor: 'red' }} size='small'>
                  <KeyboardArrowUpIcon
                    style={{ width: '0.88em', height: '0.88em' }}
                  />
                </Fab>
              </td>
              <td>
                {id !== eachQuota.id ? (
                  <Fab
                    onClick={e => {
                      if (id === eachQuota.id) {
                        setId(null)
                      } else setId(eachQuota.id)
                    }}
                    sx={{
                      backgroundColor: 'rgba(106,106,106,0.15)',
                      zIndex: 1
                    }}
                    size='small'
                  >
                    <KeyboardArrowDownIcon
                      style={{ width: '0.88em', height: '0.88em' }}
                    />
                  </Fab>
                ) : (
                  <Fab
                    onClick={e => {
                      if (id === eachQuota.id) {
                        setId(null)
                      } else setId(eachQuota.id)
                    }}
                    sx={{
                      backgroundColor: 'rgba(106,106,106,0.15)',
                      zIndex: 1
                    }}
                    size='small'
                  >
                    <KeyboardArrowUpIcon
                      style={{ width: '0.88em', height: '0.88em' }}
                    />
                  </Fab>
                )}
              </td>
            </tr>
            <tr>
              <td colSpan='10'>
                <Collapse
                  // collapsedSize='large'
                  in={eachQuota.id === id}
                  xs={{}}
                  className={classes.collapseStyle}
                >
                  <TextField
                    className={classes.textField}
                    multiline
                    fullWidth
                    focused
                    label='Description'
                    value='lorem epsfgss   ssssssssss ssssss  sssssss ss  ssssssssssss sssssssss sgffffffffff fffffffffff ffffffff ffffffffff f ffff fffff'
                  />
                </Collapse>
              </td>
            </tr>
          </>
        ))}
      </Table>
      <Button
        className='text-capitalize'
        startIcon={<AddIcon />}
        // color='primary'
        style={{
          color: '#17A5CE',

          marginTop: '20px',
          border: '1.5px solid #17A5CE',
          letterSpacing: '.75px',
          fontWeight: '700'
        }}
        variant='outlined'
        onClick={() => setOpenDialog(true)}
      >
        Add another Quota
      </Button>
    </>
  )
}

export default Quota
