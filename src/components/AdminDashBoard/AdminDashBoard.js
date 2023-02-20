import './AdminDashBoard.css'
import React, { useRef } from 'react'
import CareerTable from '../Career-Table/CareerTable'
import { Button, Row } from 'react-bootstrap'
import ProcurementTable from '../Procurement-Table/ProcurementTable'

const AdminDashBoard = () => {
  const options = ['One', 'Two', 'Three', 'Four', 'Five'];
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value: ", event.target.value);
  }
  return (
    <div className='AdminDashBoard'>
      <Row className = "Career-Status">
        <div className = 'CareerTable-Main-Head'>Career Status</div>
        <div className = 'CareerTable-Sec-Head'>
          Current Career Table
        </div>
      </Row>
        <div className="contain">
          <CareerTable/>
        </div>
        <div className = 'Career-Status AddOpp-head'>
          Add an Opportunity
        </div>
        <div className = 'Career-Status AddOpp-content'>
          <div className = 'selectdept'>
            <select onChange = {onOptionChangeHandler}>
              {/* <option>Choose a Department</option> */}
              {
                options.map((option, index) => {
                  return <option key = {index}>
                    {option}
                  </option>
                })
              }
            </select>
          </div>
          <div className = 'roleinp'>
            <input className = 'roleinp-uni' placeholder = 'Role'/>
          </div>
          <div className = 'descrole'>
            <textarea className = 'text-desc' placeholder = 'Description of the role'></textarea>
          </div>
          <div className="no-open">
            <input className = 'no-of-open' placeholder = 'No. of openings' type="number"/>
          </div>
          <div className="closedate">
            <input className = 'expectedclosure' placeholder = 'Expected Closure Date' onChange={(e) => console.log(e.target.value)} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} />
          </div>
        </div>
        <div className = 'Career-Status Addoppbut'>
          <Button className = 'Oppbtn'>Add <span style = {{margin: '0 0 0 10px'}}><i class="fa fa-plus-circle"></i></span></Button>
        </div>


      <Row className = "Procurement-Status">
        <div className = 'ProcurementTable-Main-Head'>Procurement Status</div>
        <div className = 'ProcurementTable-Sec-Head'>
          Current Procurement Table
        </div>
        <div className="contain">
          <ProcurementTable/>
        </div>
      </Row>
    </div>
  )
}

export default AdminDashBoard