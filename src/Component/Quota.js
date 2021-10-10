import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Table } from 'react-bootstrap'
import { Checkbox, Button, Container } from '@material-ui/core'
import { IconButton } from '@mui/material'
import Fab from '@mui/material/Fab'
import { Collapse } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { makeStyles } from '@mui/styles'

// const useStyles = makeStyles({
//   btn: {
//     '& .MuiButton-outlinedPrimary': {
//       color: '#17A5CE',
//       backgroundColor: '#17A5CE'
//     }
//   }
// })

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
  // const classes = useStyles()
  // const [id, setId] = React.useState(0)
  // const handleChange = id => {
  //   setId(id)
  // }
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
                <Fab
                  // onClick={e => {
                  //   setId(eachQuota.id)
                  // }}
                  sx={{ backgroundColor: 'rgba(106,106,106,0.15)' }}
                  size='small'
                >
                  <KeyboardArrowDownIcon
                    style={{ width: '0.88em', height: '0.88em' }}
                  />
                </Fab>
              </td>
            </tr>
            {/* <Collapse in={eachQuota.id === id}>
            <h1>ok</h1>
          </Collapse> */}
          </>
        ))}
      </Table>
      <Button
        // className={classes.btn}
        startIcon={<AddIcon />}
        // color='primary'
        style={{ color: '#17A5CE', fontWeight: 'sembold', marginTop: '20px' }}
        variant='outlined'
      >
        Add new quota
      </Button>
    </>
  )
}

export default Quota
