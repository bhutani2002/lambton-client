import './ProcurementTable.css'
import React from 'react'
import {info} from './Procure-info'
import TableSection from './TableSection'

const ProcurementTable = () => {
  return (
    <div class="table-responsive">
        <table>
            <thead>
                <td></td>
                <th>Vendor Name</th>
                {/* <th className = 'Table-Role'>Role(s)</th> */}
                <th>RFI Submitted</th>
                <th>RFP Submitted</th>
                <th>RFQ Submitted</th>
                <th>Selection Status</th>
            </thead>
            {info.map((Details, index) => (
                <TableSection Details={Details} index={index} />
            ))}
        </table>
    </div>
  )
}

export default ProcurementTable