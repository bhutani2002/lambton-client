import React,{useEffect,useState} from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar-head.css'
import Register from '../../Register/Register';
import Login from '../../Login/Login';
import Banner from '../Banner/Banner';
import Toyota from '../Toyota/Toyota';
import Footer from '../Footer/Footer';
// import vincenzo from '../../../assets/images/Vincenzo-logo-removebg-preview.png'
// import vincenzo from '../../../assets/images/Vincenzo-logo.jfif'
import vincenzo from '../../../assets/images/vince.png'
import sarniachamber from '../../../assets/images/Sarnia-chamber.png'
import ToyoLogo from '../../../assets/images/Toyota-Logo.png'
import HandLogo from '../../../assets/images/hand-logo.png'
import { useNavigate } from 'react-router-dom';


const NavbarHead = ({setLoginUser, butName, setbutName, usermail}) => {
  const navigate = useNavigate();
  const toggleRegister = (e) => {
      document.querySelector(".Reg").classList.toggle('display_none');
  }
  const[show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window?.scrollY > 100 ? handleShow(true) : handleShow(false);
        })
        return ()=>{
            window.removeEventListener("scroll",null);
        }
    },[])
    const [clicked, setClicked] = useState(false);
    const handleRoute = () => {
      if( butName === "LogOut"){
        // console.log("Namaste")
        setbutName("SignUp/Login")
        window.localStorage.removeItem("isLoggedIn");
        window.localStorage.removeItem("userMail")
        // window.localStorage.removeItem("userdata");
        navigate('/')
      } else {
        navigate('/register')
      }
    }
  return (
    // <>
    // <Navbar expand="md" className={`nav__original ${show && "nav__black"}`}>
    <Navbar expand="xl" className={`nav__original ${show && "nav__black"}`}>
        <Container>
          <Navbar.Brand href="/">
          {/* <Nav.Link href="/" ><span className="gray-color"> &lt;</span><span className="logo-name">Raag</span><span className="gray-color">/&gt;</span></Nav.Link> */}
          <Nav.Link href="/" className = 'BrandLogo'><img src = {sarniachamber} width = '130px' height = '50px'/><img src = {HandLogo} width = '60px' height = '50px'/><img src = {ToyoLogo} width = '70px' height = '60px'/></Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto Navbar-Links">
                {/* <Nav.Link className="header-link" href = '/'>Home</Nav.Link> */}
                <Nav.Link className="header-link" href ='/Vehicles'>Vehicles</Nav.Link>
                {/* <Nav.Link className="header-link" href='#Training'>Training</Nav.Link> */}
                <Nav.Link className="header-link" href = '/AboutUs'>AboutUs</Nav.Link>
                <Nav.Link className="header-link" href='/Careers'>Careers & Training</Nav.Link>
                {/* <Nav.Link className="header-link" href='#Investors'>Investors</Nav.Link> */}
                <Nav.Link className="header-link" href='/PlantDetails'>Plant Details</Nav.Link>
                <Nav.Link className="header-link" href='/Procurement'>Procurement</Nav.Link>
                {usermail === 'Test@gmail.com' && <Nav.Link className="header-link" href='/admindashboard'>Dashboard</Nav.Link>}
                {/* <div onClick={(e) => {toggleRegister(e)}}>
                  <Nav.Link><Button className = 'logbut'>SignUp/Login</Button></Nav.Link>
                </div> */}
                <div onClick={handleRoute}>
                  <Nav.Link><Button className = 'logbut'>{butName}</Button></Nav.Link>
                </div>
                <Nav.Link className="header-link" href='/'><img src = {vincenzo} width = '70px' height = '70px'/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* <div className = 'Reg display_none'><Register/></div> */}
        {/* <div className = 'Reg display_none'><Login/></div> */}
      </Navbar>
  )
}

export default NavbarHead