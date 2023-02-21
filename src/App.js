import './App.css';
import Goto from './components/GoTo/GoTo';
import Banner from './components/Landing-Page/Banner/Banner';
import Footer from './components/Landing-Page/Footer/Footer';
import NavbarHead from './components/Landing-Page/Navbar-head/Navbar-head';
import Toyota from './components/Landing-Page/Toyota/Toyota';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import AdminDashBoard from './components/AdminDashBoard/AdminDashBoard';
import PageNotFound from './components/PageNotFound/PageNotFound';
import LandingPage from './components/Landing-Page/Landing-Page';
import AboutUs from './components/AboutUs/AboutUs';
import Careers from './components/Careers/Careers';
import Vehicles from './components/Vehicles/Vehicles';
import Accordion from './components/Accordion/Accordion';
import PlantDetails from './components/PlantDetails/PlantDetails';
import { ToastContainer } from 'react-toastify';
import Procurement from './components/Procurement/Procurement';
// import { useNavigate } from 'react-router-dom';

function App() {
  const [ user, setLoginUser] = useState({})
  const [butName, setbutName] = useState('SignUp/Login')
  // const navigate = useNavigate()

  // if(loggedIn){
    // setLoginUser(user);
    // setbutName("LogOut");
  // }
  const userMail = window.localStorage.getItem("userMail");
  useEffect(() => {
    const loggedIn = window.localStorage.getItem("isLoggedIn");
    // const userdata = window.localStorage.getItem("userdata");
    console.log(loggedIn, "login");
    // console.log(userdata, "USER");
    if(loggedIn){
      // setLoginUser(userdata);
      setbutName("LogOut");
      // console.log(userdata.email);
    }
  }, [])
  
  // const handleurl = () => {
    // <NavbarHead setLoginUser={setLoginUser} butName = {butName} setbutName = {setbutName}/>
    // alert("You are not an Admin");
    // window.location.href = '/';
  // }
  // function ProtectedAdmin(){
  //   if(user && (user.email === "Test@gmail.com")){
  //     return <AdminDashBoard></AdminDashBoard>
  //   }else{
  //     navigate("/");
  //     window.history.replaceState(null, '', '/');
  //   }
  // }
  return (
    <div className="App">
      <Router>
        <NavbarHead setLoginUser={setLoginUser} butName = {butName} setbutName = {setbutName} usermail = {userMail}/>
        <Routes>
          {/* <Route exact path = '/' element=
            {
                (user && user._id)? <NavbarHead setLoginUser={setLoginUser} butName = {butName}/> : <Login setLoginUser={setLoginUser} setbutName = {setbutName}/>
            }> */}
          <Route exact path = '/' element =
            {
                // <NavbarHead setLoginUser={setLoginUser} butName = {butName} setbutName = {setbutName}/>
                <LandingPage/>
            }>
          </Route>
          <Route path = '/login' element = {<Login setLoginUser={setLoginUser} setbutName = {setbutName}/>} />
          <Route path = '/register' element = {<Register/>}/>
          <Route path = '/AboutUS' element = {<AboutUs/>} />
          <Route path = '/Careers' element = {<Careers/>} />
          <Route path = '/Vehicles' element = {<Vehicles/>} />
          <Route path = '/PlantDetails' element = {<PlantDetails/>} />
          <Route path = '/Procurement' element = {<Procurement/>} />
          {/* <Route path = '/admindashboard' element = {(userMail === 'Test@gmail.com') ? <AdminDashBoard/> : <PageNotFound/>} /> */}
          <Route path = '/admindashboard' element = {(userMail === 'LambtonEPZ@gmail.com') ? <AdminDashBoard/> : <PageNotFound/>} />
          {/* <Route exact path = '/admindashboard' element = {(user && (user.email === 'Test@gmail.com')) ? <AdminDashBoard/> : window.history.replaceState(null, '', '/')} /> */}
          {/* <Route path = '/admindashboard' element = {<AdminDashBoard/>}/> */}
          <Route path = "/404" element = {<PageNotFound/>} />
          <Route path = '*'  element = {<Navigate to ="/404" />} />
        </Routes>
        <Footer/>
        <Goto/>
      </Router>
      <ToastContainer/>
    </div>
  );
}
export default App;
