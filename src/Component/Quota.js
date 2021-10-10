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
      responsive
      className='table-centered table-nowrap rounded mb-0 choice-table'
    >
      <thead className='thead-light'>
        <tr>
          <th className='border-0'>#</th>
          <th className='border-0'>Shift</th>
          <th className='border-0'>Version</th>
          <th className='border-0'>Group</th>
          <th className='border-0'>Gender</th>
          <th className='border-0'>Seats</th>
          <th className='border-0'>SQ</th>
          <th className='border-0'>Action</th>
        </tr>
      </thead>
      <tbody>
        {this.state.esvgs.map((esvg, id) => (
          <tr>
            <td>{id + 1}</td>
            <td>{esvg.shift.shiftName}</td>
            <td>{esvg.version.versionName}</td>
            <td>{esvg.hscGroup.hscGroupName}</td>
            <td>{esvg.gender}</td>
            <td>{esvg.seatsAvailable}</td>
            <td>
              <Checkbox
                // checked={esvg.SQChecked}
                // disabled={esvg.alreadyExistInChoiceList}
                // onChange={() => this.handleSQCheckedChange(esvg)}
                name='checkedB'
                color='primary'
                style={{ marginTop: '-10px' }}
              />
              {/* )} */}
            </td>
            <td>AddIcon</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Quota
