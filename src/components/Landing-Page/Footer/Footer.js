import './Footer.css'
import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import lambtonlogo from '../../../assets/images/LC-removebg-preview.png'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row style = {{alignItems: "flex-start"}}>
          <Col className = "FooterLinks" size={12} md = {4} sm={4} style = {{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: '30px'}}>
            <div style = {{fontSize: '30px', fontWeight: 'bolder', color: 'black', borderBottom: '3px solid black', maxWidth: '90%', marginBottom: '10px'}}>Sarnia Lambton EPZ</div>
            <div className="Foot-Links"><a href="/">Home</a></div>
            <div className="Foot-Links"><a href="/Vehicles">Vehicles</a></div>
            <div className="Foot-Links"><a href="/AboutUs">About Us</a></div>
            <div className="Foot-Links"><a href="/Careers">Careers</a></div>
            <div className="Foot-Links"><a href="/PlantDetails">Plant Details</a></div>
            <div className="Foot-Links"><a href="/Procurement">Procurement</a></div>
          </Col>
          <Col size={12} md = {4} sm={4} className="text-center ContactUS FooterLinks" style = {{padding: '30px'}}>
            <div className="footer-bottom">
              <div>
                <div style = {{fontSize: '30px', fontWeight: 'bolder', color: 'black', borderBottom: '3px solid black', maxWidth: '95%', marginBottom: '10px'}}>
                    Our Team
                </div>
                <div style = {{paddingBottom: '20px'}}>
                    {/* <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <a href="https://www.linkedin.com/in/raag-bhutani-68b096201/" target="_blank" style = {{margin: '10px'}}><i style = {{color: 'black', fontSize: '30px'}} className = "fa fa-map-marker"></i></a>
                        <p>8779 Windsor St. Fuquay Varina, NC 27526</p>
                    </div>
                    <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <a href="https://github.com/bhutani2002" target="_blank" style = {{margin: '10px'}}><i className = "fa fa-phone" style = {{color: 'black', fontSize: '30px'}}></i></a>
                        <p>+1-613-555-0168</p>
                    </div> */}
                    <div style = {{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                        <a href = "mailto:anshbhutani1996@gmail.com" style = {{margin: '10px'}}><i style = {{color: 'black', fontSize: '30px'}} className = "fa fa-envelope" aria-hidden="true"></i></a>
                        <p>anshbhutani1996@gmail.com [Ansh]</p>
                    </div>
                    <div style = {{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                        <a href = "mailto:raagbhutani2002@gmail.com" style = {{margin: '10px'}}><i style = {{color: 'black', fontSize: '30px'}} className = "fa fa-envelope" aria-hidden="true"></i></a>
                        <p>anshbhutani1996@gmail.com [Bhuvaneshwari]</p>
                    </div>
                    <div style = {{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                        <a href = "mailto:raagbhutani2002@gmail.com" target="_blank" style = {{margin: '10px'}}><i style = {{color: 'black', fontSize: '30px'}} className = "fa fa-envelope" aria-hidden="true"></i></a>
                        <p>anshbhutani1996@gmail.com [Rodrigo Vegazo]</p>
                    </div>
                </div>
              </div>
              <ul className="social-network social-circle py-3">
                <li>
                  <a className = "icoLinkedin" href="https://www.linkedin.com/in/ansh-bhutani-272882131/" target="_blank"><i className = "fa fa-linkedin"></i></a>
                </li>
                {/* <li>
                  <a className = "icoGitHub" href="https://github.com/bhutani2002" target="_blank"><i className = "fa fa-github"></i></a>
                </li>
                <li>
                  <a className="icoInstagram" href = "https://www.instagram.com/raag_bhutani/" target="_blank"><i className = "fa fa-instagram"></i></a>
                </li> */}
                <li>
                  <a className="icoMail" href = "mailto:anshbhutani1996@gmail.com"><i className = "fa fa-envelope"></i></a>
                </li>
              </ul>
            </div>
          </Col>
          <Col size = {12} md = {4} sm = {4} className = "Location FooterLinks" style = {{padding: '30px'}}>
            <div style = {{fontSize: '30px', fontWeight: 'bolder', marginBottom: '0px', color: 'black', borderBottom: '3px solid black', maxWidth: '90%', marginBottom: '10px'}}>
                Location
            </div>
            <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <a style = {{margin: '10px'}}><i style = {{color: 'black', fontSize: '30px'}} className = "fa fa-map-marker"></i></a>
                        <p style = {{color: '#DE0214', font: 'bolder'}}>Michigan line, near Sarnia Chris Hadfield Airport, Sarnia, ON N7W 1B6</p>
                    </div>
            <div>
                <iframe style = {{overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center"}} width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Michigan line, near Sarnia Chris Hadfield Airport, Sarnia, ON N7W 1B6&t=&z=10&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe>
            </div>
          </Col>
        </Row>
        
        <div style = {{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                {/* <p> © Copyright 2023. All Rights Reserved</p> */}
              <div className = 'LCLogo'>
                <img src = {lambtonlogo} width = "80px" height = "30px"/>
              </div>
              <p>© 2023 Lambton College Canada</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer