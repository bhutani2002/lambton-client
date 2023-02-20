import './Toyota.css'
import { Container, Row, Col, Button, Image} from "react-bootstrap";
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import toyota from '../../../assets/images/Carausal-1.jpg'
import Ghash from '../../../assets/images/Google-HashCode.jpg'
import Gstart from '../../../assets/images/google-kickstart.jpg'
import Gcloud from '../../../assets/images/30-Days-Of-Google-Cloud.png'
// Environmental_image
import Env from '../../../assets/images/Environmental_image.jpg'
import RAV4Prime from '../../../assets/images/b23_gb3fv.png'
import ProjectBenefits from '../../../assets/images/Project-Benefits.png'
const Toyota = () => {
  return (
    <div className = 'Company-Block'>
        <Row className = 'Toyota'>
            <Row>
                <h1 className = 'Company-Name'>TOYOTA</h1>
            </Row>
            <Row>
                <Col size={12} md = {4} sm={6} className = "Comp-image">
                    <MDBCard className = 'cardbo'>
                        <MDBCardImage src = {RAV4Prime} className='cardimg' alt='...' />
                    </MDBCard>
                </Col>
                <Col size={12} md = {8} sm={6} className = 'description'>
                    <p>Toyota is one of the largest automobile manufacturers in the world, producing about 10 million vehicles per year. The company was originally founded as a spinoff of Toyota Industries, a machine maker started by Sakichi Toyoda, Kiichiro's father. Both companies are now part of the Toyota Group, one of the largest conglomerates in the world. Toyota was praised for being a leader in the development and sales of more fuel-efficient hybrid electric vehicles, starting with the introduction of the Toyota Prius in 1997. The company now sells more than 40 hybrid vehicle models around the world.</p>
                </Col>
            </Row>
        </Row>

        <Row className = 'OurPlant'>
            <Row>
                <h1 className = 'Company-Name'>OUR-PLANT</h1>
            </Row>
            <Row className = 'OurPlant-dir'>
                <Col size={12} md = {4} sm={6} className = "Comp-image">
                    <MDBCard className = 'cardbo'>
                        <MDBCardImage src = {Gcloud} className='cardimg' alt='...' />
                    </MDBCard>
                </Col>
                <Col size={12} md = {8} sm={6} className = 'description'>
                    <p>The Sarnia Lambton Chamber  and Industry is considering the establishment of an Export Processing Zone (EPZ) in the Sarnia Lambton County. This is being done to attract and also retain professionals who graduate from Lambton College in the county. Also, Canadian Government has it’s own initiative named “Government of Canada Green Initiative” along with the current initiative, the Sarnia Lambton hosts a Chemical Valley which has a lot of hydro-carbon as well petro-chemical industries. Adding to this, many Electric Vehicle(EV) manufacturers have been showing interest in setting up their operations here in the county. In order to this the chamber has hired a team of Project Consultants to set up an Assembly Plant for the EV Manufacturing. The plant will also take care of all the needs and requirements for the manufacturing and distribution of these vehicles. </p>
                </Col>
            </Row>
        </Row>

        <Row className = 'Environmental'>
            <Row>
                <h1 className = 'Company-Name'>ENVIRONMENTAL-IMPACT</h1>
            </Row>
            <Row>
                <Col size={12} md = {4} sm={6} className = "Comp-image">
                    <MDBCard className = 'cardbo'>
                        <MDBCardImage src = {Env} className='cardimg' alt='...' />
                    </MDBCard>
                </Col>
                <Col size={12} md = {8} sm={6} className = 'description'>
                    <p>This project seeks to be part of the zero-emissions program promoted by the Canadian government. This program using incentives and investment will seek to change the current matrix of internal combustion vehicles towards 100% electromobility, with these measures the government seeks to cut pollution and minimize greenhouse gases, in addition to the creation of good jobs and fighting climate change. And there are many reasons to predict that the province of Ontario will be a crucial jurisdiction in the global production of EVs.</p>
                </Col>
            </Row>
        </Row>

        <Row className = 'ProjectOverview'>
            <Row>
                <h1 className = 'Company-Name'>PROJECT-BENEFITS</h1>
            </Row>
            <Row className = 'Overview-dir'>
                <Col size={12} md = {4} sm={6} className = "Comp-image">
                    <MDBCard className = 'cardbo'>
                        <MDBCardImage src = {ProjectBenefits} className='cardimg' alt='...' />
                    </MDBCard>
                </Col>
                <Col size={12} md = {8} sm={6} className = 'description'>
                    <p>The Project will have the benefits such as 1400 employment opportunity creation, Profitability index greater than one, 82% Plant Capacity, 36000 Electrical Vehicle manufacturing per year, and approximate project savings is $710 Billion.</p>
                </Col>
            </Row>
        </Row>
    </div>
  )
}

export default Toyota