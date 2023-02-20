import React, { useState } from 'react'
import { ExpandableButton } from "./ExpandableButton";
import { TableRow } from "./TableRow";
import useOpenController from "./useOpenController";
const TableSection = ({ Details, index }) => {
    const { isOpen, toggle } = useOpenController(false);
    // const [show, setShow] = useState(false);
  return (
    <tbody>
      <tr>
        {/* <td className="button-td" onClick = {() => setShow(!show)}>
          {show ?  <i className = "fa fa-angle-up"></i> : <i className = "fa fa-angle-down"></i>}
        </td> */}
        <td className="button-td">
          <ExpandableButton isOpen={isOpen} toggle={toggle} />
        </td>
        
        <td>{Details.dept_name}</td>
        
        
        {/* <td>{Details.Role}</td> */}
        <td>
        {Array.from({ length: 2}).map((it, index) =><tr><td>{Details.Role}</td></tr>)}
        </td>
        
        
        {/* <td>{Details.Openings}</td> */}
        <td>
        {Array.from({ length: 2}).map((it, index) =><tr><td>{Details.Openings}</td></tr>)}
        </td>
        
        
        {/* <td>{Details.ExpClosure}</td> */}
        <td>
        {Array.from({ length: 2}).map((it, index) =><tr><td>{Details.ExpClosure}</td></tr>)}
        </td>
      
      </tr>
      {/* {isOpen && <TableRow Details={Details} />} */}
      {isOpen && Array.from({ length: 2}).map((it, index) => <TableRow Details={Details} />)}
      {/* {show && Array.from({ length: 2}).map((it, index) => <TableRow Details={Details} />)} */}
      {/* {items.map(item => <ObjectRow key={item.id} name={item.name} />)}  */}
      {/* {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })} */}
    </tbody>
  )
}

export default TableSection