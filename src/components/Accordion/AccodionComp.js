import './Accordion.css'
import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const AccodionComp = ({question, answer}) => {
    const [show, setShow] = useState(false);
  return (
    <div className = 'Faqs'>
        <div className = 'main-heading' onClick = {() => setShow(!show)}>
            <Col md = {11} sm = {6}>
                <h3>{question}</h3>
            </Col>
            <Col md = {1} sm = {6}>
                <p>{show ?  <i className = "fa fa-angle-up"></i> : <i className = "fa fa-angle-down"></i>}</p>
            </Col>
        </div>
        {show && <p className = 'answers'>{answer}</p>}
    </div>
  )
}

export default AccodionComp