import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import "./SignUpForm.css";
import * as ROUTES from "../../constants/routes";



const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <div className='container'>
            <p>Please use the form below to sign up</p>
            <form 
            onSubmit={
                (event) => {
                    event.preventDefault();
                    auth.signup({email, password, callback: () => navigate("/home")})
                    setEmail("");
                    setPassword("");
                }}>
                <label>Email</label>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default SignUpForm