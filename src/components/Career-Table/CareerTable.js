import './CareerTable.css'
import React from 'react'
import {info} from './info'
import TableSection from './TableSection'

const CareerTable = () => {
  return (
    <div class="table-responsive">
        <table>
            <thead>
                <td></td>
                <th>Department</th>
                {/* <th className = 'Table-Role'>Role(s)</th> */}
                <th>Role(s)</th>
                <th>No. of Openings</th>
                <th>Expected Closure Date</th>
            </thead>
            {info.map((Details, index) => (
                <TableSection Details={Details} index={index} />
            ))}
        </table>
    </div>
  )
}

export default CareerTable