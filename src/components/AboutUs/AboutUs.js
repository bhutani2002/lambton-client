import './AboutUs.css'
import React from 'react'
import About from '../../assets/images/AboutUs.png'
import backimage from '../../assets/images/Background-About.jpeg'
import { Col, Row } from 'react-bootstrap'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import Ghash from '../../assets/images/Google-HashCode.jpg'
const AboutUs = () => {
  return (
    <div className='About-Us'>
      <img src = {About} className = "Aboutusimage"></img>
      <Row className='Background'>
        <Row className = 'top-head'>
          <div>
            <h1 className = 'Background-Name'>BACKGROUND</h1>
            <div className = 'Underline'></div>
          </div>
        </Row>
        <Row>
          <Col size={12} md = {8} sm={6} className = 'description-about'>
            <p>The Sarnia Lambton Chamber and Industry is considering the establishment of an Export Processing Zone (EPZ) in the Sarnia Lambton County. This is being done to attract and also retain professionals who graduate from Lambton College in the county. Also, Canadian Government has it’s own initiative named “Government of Canada Green Initiative” along with the current initiative, the Sarnia Lambton hosts a Chemical Valley which has a lot of hydro-carbon as well petro-chemical industries. Adding to this, many Electric Vehicle(EV) manufacturers have been showing interest in setting up their operations here in the county. In order to this the chamber has hired a team of Project Consultants to set up an Assembly Plant for the EV Manufacturing. The plant will also take care of all the needs and requirements for the manufacturing and distribution of these vehicles</p>
          </Col>
          <Col size={12} md = {4} sm={6} className = 'Background-Img'>
            <MDBCard className = 'cardbo'>
                <MDBCardImage src = {backimage} className='cardimg' alt='...' />
            </MDBCard>
          </Col>
        </Row>
      </Row>



      <Row className = 'Vision-Mission'>
        <Row>
          <Col size={12} md = {6} sm={6} className = 'description-vision'>
            <div className = 'Background-headings'>
              <h1 className = 'Background-Name'>OUR VISION</h1>
              <div className = 'Underline'></div>
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus sem, sagittis sed lacus in, molestie euismod magna. Donec eleifend porta erat, vitae lacinia lorem consectetur non. Quisque malesuada sapien sed tempus posuere. Nunc convallis tellus eu lectus varius gravida. Quisque a nulla ac felis vestibulum facilisis et porta erat. Nunc vitae ante vestibulum, luctus turpis ut, dignissim odio. Ut rhoncus et augue pulvinar pellentesque. Quisque sollicitudin nisi sed ultrices aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus sem, sagittis sed lacus in, molestie euismod magna. Donec eleifend porta erat, vitae lacinia lorem consectetur non. Quisque malesuada sapien sed tempus posuere. Nunc convallis tellus eu lectus varius gravida. Quisque a nulla ac felis vestibulum facilisis et porta erat. Nunc vitae ante vestibulum, luctus turpis ut, dignissim odio. Ut rhoncus et augue pulvinar pellentesque. Quisque sollicitudin nisi sed ultrices aliquam.</p> */}
            <p>To build and maintain an environment serving community, students, business, and environment. A place where all the people, safety and environment are priority.</p>
          </Col>
          <Col size={12} md = {6} sm={6} className = 'description-mission'>
            <div className = 'Background-headings'>
              <h1 className = 'Background-Name'>OUR MISSION</h1>
              <div className = 'Underline'></div>
            </div>
          <p>To be an active agent in the fight against climate change, applying the best practices and using clean technologies in all our processes. Also putting our province and local community as a world economic center, open to all international business actors and bringing them all with the incentives and investment capital opportunities to make and lead the changes the world needs.</p>
          </Col>
        </Row>
      </Row>
    </div>
  )
}

export default AboutUs