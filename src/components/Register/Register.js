import './Register.css'
import React, { useEffect, useState } from "react"
import axios from "axios"
// import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    // const history = useNavigate()
    const navigate = useNavigate();
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("/api/register", user)
            .then( res => {
                if(res.data.code === 'R1'){
                    toast.error(res.data.message)
                    navigate('/login');
                }
                else if(res.data.code === 'R2'){
                    toast.success(<div>Successfully Registered! <br /> Please Login now!</div>);
                    navigate('/login');
                }
                else if(res.data.code === 'R3')
                    toast.error(res.data.message)
            }).catch(res => {
                toast.error("Server Error");
            })
        } else {
            toast.warn("Invalid Input")
        }
    }
    return (
        <div className = 'RegOutBox'>
            <div className="register">
                <h1>Register</h1>
                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
                <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
                <div className="button" onClick={register} >Register</div>
                <div>or</div>
                <div className="button" onClick={() => navigate("/login")}>Login</div>
            </div>
            {/* <ToastContainer /> */}
        </div>
    )
}

export default Register
