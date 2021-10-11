import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Table } from 'react-bootstrap'
import { Checkbox, Button, Container } from '@material-ui/core'
import { IconButton, TextField } from '@mui/material'
import Fab from '@mui/material/Fab'
import { Collapse } from '@mui/material'
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
  btn: {
    '& label.Mui-focused': {
      color: '#17A5CE',
      padding: '2px 10px 0px 10px',
      letterSpacing: '.75px',
      // backgroundColor: 'red',
      // position: 'relative',
      // width: '80px',
      fontSize: '20px',
      top: '-8px',

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
  const handleChange = id => {
    setId(id)
  }
  return (
    <>
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
                backgroundColor: `${i % 2 === 0 ? '#EAFAFF' : '#fff'}`,
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
                    className={classes.btn}
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
      >
        Add another Quota
      </Button>
    </>
  )
}

export default Quota
