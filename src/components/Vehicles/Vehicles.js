import './Vehicles.css'
import React from 'react'
import toyotaelec from '../../assets/images/toyota-electric.jpg'
import introback from '../../assets/images/toyota-electrification-intro-background-s.jpg'
import leaf from '../../assets/images/toyota-hybrid-leaf-icon.svg'
import sol1 from '../../assets/images/toyota-electrification-powertrains.png'
import sol2 from '../../assets/images/toyota-electrification-powertrains-BEV.png'
import { Button, Col, Nav, Row, Tab } from 'react-bootstrap'
import VehicleCard from './VehicleCard'
import BZ4X from '../../assets/images/b23_abzeve.png'
import PriusPrime from '../../assets/images/b22_kark1.png'
import RAV4Prime from '../../assets/images/b23_gb3fv.png'
import ElecCalc from '../../assets/images/toyota-electrification-gas-electric-calculator-s.jpg'
import Accordion from '../Accordion/Accordion'
const Vehicles = () => {
  return (
    <div className = 'Vehicles'>
        <Row className = 'ImageElectric'>
            <div>
                <img src = {toyotaelec} className = "toyoelec"></img>
            </div>
            {/* <div className = "intro_text">sdafdsfs</div> */}
            <Col className = 'Desc'>
                <div className = 'centredesc'>
                    <div className = 'centreheading red-underline'>Toyota Electrified</div>
                    <div className = 'centrenames'>
                        <ul className = 'pointnames'>
                            <li className = 'point'>PLUG-IN HYBRID ELECTRIC</li>
                            <li>BATTERY ELECTRIC</li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className = "intro">
            <div>
                <img src = {introback} className = "introback"></img>
            </div>
            <Row className = "intro_text">
                <div className = 'intro_heading red-underline'>Empowering the Future</div>
                <div className = 'veh-desc-para'>
                    <Col md = {6}>
                        We’ve been leading the charge for more than 20 years. So that today you can choose from an array of Toyota electrified vehicles and powertrains, and find the right one for you.
                    </Col>
                </div>
                <div className = 'million'>
                    <Col lg = {4} className="million-box">
                        <div className="mill-top">OVER</div>
                        <div className="mill-main-head">20 MILLION</div>
                        <div className="mill-main-sec">TOYOTA ELECTRIFIED VEHICLES</div>
                        <span className="mill-main-down">SOLD WORLDWIDE SINCE 1997</span>
                    </Col>
                </div>
            </Row>
        </Row>
        <Row className = "Solutions">
            <Row className = 'SolsDesc'>
                <Row className = 'SolsHead'>
                    <Col md = {12} sm = {6} className = 'SolsHeadText red-underline-sec'>
                        <div>One Company, Multiple Solutions</div>
                        <img src = {leaf}></img>
                    </Col>
                </Row>
                <div className = 'veh-desc-para Solspara'>
                    <Col md = {6}>
                        At Toyota, we believe that different mobility needs require different mobility solutions. That’s why we’re investing in a range of electrified technologies.
                    </Col>
                </div>
            </Row>
            <Row className = 'SolutionImages'>
                <Col size = {12} md = {4} sm = {6} className = "Sec1">
                    <div className = 'SolImg'>
                        <img src = {sol1}></img>
                    </div>
                    <div className = 'ImgSolsHead'>
                        <div className = 'SolImgHeading'>
                            PLUG-IN HYBRID ELECTRIC VEHICLE
                        </div>
                    </div>
                    <div className = 'veh-desc-para SolImgDesc'>
                        <Col md = {6}>
                            PHEVs operate in the same way as HEVs, but can optionally be plugged in for extended electric-only range.
                        </Col>
                    </div>
                </Col>
                <Col size = {12} md = {4} sm = {6} className = "Sec2">
                    <div className = 'SolImg'>
                        <img src = {sol2}></img>
                    </div>
                    <div className = 'ImgSolsHead'>
                        <div className = 'SolImgHeading'>
                            BATTERY ELECTRIC VEHICLE
                        </div>
                    </div>
                    <div className = 'veh-desc-para SolImgDesc'>
                        <Col md = {6}>
                            BEVs are zero-emission vehicles that are powered by electricity alone. BEVs require plugging-in, while also utilizing regenerative braking to recharge the onboard battery as you drive.
                        </Col>
                    </div>
                </Col>
            </Row>
        </Row>




        <Row className = "Solutions">
            <Row className = 'SolsDesc'>
                <Row className = 'SolsHead'>
                    <Col md = {12} sm = {6} className = 'SolsHeadText red-underline-sec'>
                        <div> Find Your Ideal Electrified Vehicle </div>
                        <img src = {leaf}></img>
                    </Col>
                </Row>
                <div className = 'veh-desc-para Solspara'>
                    <Col md = {6}>
                        From compact sedan to full-size pickup, we offer electrified vehicles to help power your lifestyle.
                    </Col>
                </div>
            </Row>
            <Row className = 'ModelTabs'>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center car-tab" id="pills-tab">
                        <Nav.Item className = "pro-tab">
                        <Nav.Link eventKey="first">Plug-in Hybrid Electric</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "pro-tab">
                        <Nav.Link eventKey="second">Battery Electric</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                        <Tab.Pane eventKey="first">
                        <div className = 'vcard'>
                            {/* <Col md = {4} sm = {6}> */}
                                <VehicleCard ImgLink = {PriusPrime} ModelYear = {2022} ModelName = "Prius Prime"/>
                            {/* </Col> */}
                            {/* <Col md = {4} sm = {6}> */}
                                <VehicleCard ImgLink = {RAV4Prime} ModelYear = {2023} ModelName = "RAV4 Prime"/>
                            {/* </Col> */}
                        </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <div className = 'vcard'>
                                <VehicleCard ImgLink = {BZ4X} ModelYear = {2023} ModelName = "BZ4X"/>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Row>
        </Row>


        <Row className = 'intro'>
            <div>
                <img src = {ElecCalc} className = "Elecback"></img>
            </div>
            <Row className = "calc_text">
                <div className = 'calc_heading'>Electrified Toyota vs Gas Vehicle Savings Calculator</div>
                <div className = 'calc-desc-para'>
                    <Col md = {4}>
                    An electrified vehicle can help you save at the gas pump, while reducing emissions. How much? It takes only a moment to find out.
                    </Col>
                </div>
                <div className = 'million'>
                    <Button className = 'Calcbtn' href = "https://www.toyota.ca/toyota/en/electrified/electrified-calculator"><a> See how much you can save</a></Button>
                </div>
            </Row>
        </Row>



        <Row className = 'SolsHead faq'>
            <Col md = {12} sm = {6} className = 'SolsHeadText red-underline-faq'>
                <div> FAQs </div>
            </Col>
        </Row>
        <div className = 'Accord'>
            <Accordion/>
        </div>
    </div>
  )
}

export default Vehicles