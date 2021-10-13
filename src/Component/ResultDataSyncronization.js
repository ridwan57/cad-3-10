import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Table } from 'react-bootstrap'
import clsx from 'clsx'

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

const boards = [
  {
    id: 1,
    name: 'Dhaka'
  },
  {
    id: 2,
    name: 'Rajshahi'
  },
  {
    id: 3,
    name: 'Dinajpur'
  }
]
const ResultDataSyncronization = () => {
  return (
    <Table
      borderless
      responsive
      // bordered

      className='table-centered rounded mb-0 overflow-hidden text-center'
      style={
        {
          // borderSpacing: 0,
          // borderCollapse: 'collapse',
          // border: '0px solid #fff',
          // marginLeft: 'auto',
          // marginRight: 'auto'
        }
      }
    >
      <thead
        className='thead-light'
        style={{
          letterSpacing: '.75px',
          fontWeight: 600,
          marginBottom: '10px',
          justifyContent: 'center'
        }}
      >
        <tr
        //   className='mb-100'
        //   data-toggle='collapse'
        //   data-target='#demo1'
        //   class='accordion-toggle'
        //   style={{ backgroundColor: 'red' }}
        //   className='pb-5'
        >
          <th
            // className='border-0 bg-secondary'
            style={{
              maxWidth: '80px',

              paddingRight: '20px'
              //   whiteSpace: 'nowrap'
            }}
          >
            Serial No.
          </th>
          <th
            // className='border-0  bg-primary'
            style={{
              maxWidth: '180px',
              textAlign: 'left',
              paddingLeft: '0px'
              // paddingRight: '50px',
              //   minWidth: '100px'
            }}
          >
            Education Board Name
          </th>
          <th
            // className='border-0 bg-black'
            style={{ textAlign: 'right', paddingRight: '60px' }}
          >
            Result Data Synchronization
          </th>
        </tr>
      </thead>
      {boards.map((board, i) => (
        <tr
          style={{
            backgroundColor: `${i % 2 === 0 ? '#EAFAFF' : '#fff'}`,
            height: '60px',
            //   width: 'auto',
            borderBottom: '1px solid #C7c7c7'
          }}
          W
        >
          <td style={{ paddingRight: '50px' }}>{board.id}</td>
          <td style={{ textAlign: 'left' }}>{board.name}</td>
          <td style={{ textAlign: 'right', paddingRight: '80px' }}>Dropdown</td>
        </tr>
      ))}
    </Table>
  )
}

export default ResultDataSyncronization
