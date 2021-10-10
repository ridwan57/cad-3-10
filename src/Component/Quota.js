import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Table } from 'react-bootstrap'
import { Checkbox } from '@material-ui/core'
const quotas = [
  {
    id: 1,
    name: 'freedom',
    percentage: 20,
    unSeats: 12,
    q: ['G', 'S']
  }
]

const Quota = () => {
  return (
    <Table
      borderless
      responsive
      // bordered

      className='table-centered rounded mb-0 overflow-hidden text-center'
      style={{ borderSpacing: 0, borderCollapse: 'separate' }}
    >
      <thead
        className='thead-light'
        style={{ letterSpacing: '.75px', fontWeight: 600 }}
      >
        <tr>
          <th className='border-0 '>ID</th>
          <th className='border-0'>Quota Name</th>
          <th className='border-0'>Percentage</th>
          <th className='border-0'>Unallocated Seats</th>
          <th className='border-0'>General</th>
          <th className='border-0'>Special</th>
          <th className='border-0'>Priority</th>
        </tr>
      </thead>
      {quotas.map((eachQuota, i) => (
        <tr
          style={{
            backgroundColor: '#EAFAFF',
            height: '60px'
            // border: '1px solid #C7c7c7'
          }}
          className='border-2'
        >
          <td>1</td>
          <td>Mark</td>
          <td>
            <div
              style={{
                // height: '80%',
                // width: '50%',
                margin: '0 auto',
                borderRadius: '7px',
                border: '1px solid #C7c7c7',
                backgroundColor: 'white',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                textTransform: 'translate(-50%,-50%)'
              }}
              className=' h-80 w-50'
            >
              Otto
            </div>
          </td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      ))}
      <tr
        style={{
          backgroundColor: '#fff',
          height: '60px'
          // border: '1px solid #C7c7c7'
        }}
        className='border-2'
      >
        <td>1</td>
        <td>Mark</td>
        <td>
          <div
            style={{
              // height: '80%',
              // width: '50%',
              margin: '0 auto',
              borderRadius: '7px',
              border: '1px solid #C7c7c7',
              backgroundColor: 'white',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              textTransform: 'translate(-50%,-50%)'
            }}
            className=' h-80 w-50'
          >
            Otto
          </div>
        </td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>

      <tr
        style={{
          backgroundColor: '#EAFAFF',
          height: '60px'
          // border: '1px solid #C7c7c7'
        }}
        className='border-2'
      >
        <td>1</td>
        <td>Mark</td>
        <td>
          <div
            style={{
              // height: '80%',
              // width: '50%',
              margin: '0 auto',
              borderRadius: '7px',
              border: '1px solid #C7c7c7',
              backgroundColor: 'white',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              textTransform: 'translate(-50%,-50%)'
            }}
            className=' h-80 w-50'
          >
            Otto
          </div>
        </td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
    </Table>
  )
}

export default Quota
