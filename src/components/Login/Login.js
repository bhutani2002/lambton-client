import React, {useState} from "react"
import "./Login.css"
import axios from "axios"
// import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser, setbutName}) => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        const {email, password} = user;
        var desig = "";
        if(email && password){
            axios.post("/api/login", user)
            .then(res => {
                if(res.data.code == 'L4')
                    toast.error(res.data.message)
                else if(res.data.code === 'L3')
                    toast.error(res.data.message);
                if(res.data.code === 'L2')
                    toast.error(res.data.message)
                else if(res.data.code === 'L1'){
                    if(res.data.user.email === 'LambtonEPZ@gmail.com'){
                        desig = "Admin";
                    }else{
                        desig = "";
                    }
                    toast.success(<div>Hi {res.data.user.name}! <br /> Welcome to the Sarnia Lambton EPZ {desig} Portal</div>,{position: "top-center"});
                    setLoginUser(res.data.user);
                    setbutName("LogOut");
                    
                    window.localStorage.setItem("isLoggedIn", true);
                    window.localStorage.setItem("userMail", res.data.user.email);
                    
                    if(res.data.user.email === 'LambtonEPZ@gmail.com')
                        navigate('/admindashboard')
                    else
                        navigate('/');
                }
            })
        } else {
            toast.warn("Invalid Input");
        }
    }

    return (
        <div className = "OutBox">
            <div className="login">
                <h1>Login</h1>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button" onClick={() => navigate("/register")}>Register</div>
            </div>
        </div>
    )
}

export default Login