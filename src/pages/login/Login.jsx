import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginApi } from '../../api/Api';
import EmailInput from '../../components/EmailForm/EmailInput';


import './style.css';
export default function Login() {
    const navigate = useNavigate();
    const HandleLogin =async (event)=>{
        event.preventDefault();
        const {userEmail , password} = document.forms[0];
        const response = await LoginApi(userEmail.value,password.value);
        if(response)
        {
            console.log("Login successful");
            const userData={ 
                "uid": response.data.uid,
                "token":response.data.token
            }
            localStorage.setItem('userData', JSON.stringify(userData));
            // console.log("USERDATA: " ,localStorage.getItem('userData'))
            return navigate('/home');
        }
        return console.log("Login Failed");
    }
    return (
        <div className="login-body">
            <div className='login-form'>
                <h2 className='login-header'>Sign In </h2>
                <form  onSubmit={HandleLogin}>
                    <EmailInput/>
                    <div className='form-field'>
                        <input className='login-form-input' placeholder='Password' type="password" name="password" required />
                    </div>
                    <button className="signin-button" type="submit" >Sign In</button>
                </form>
                <div className='login-footer'>
                    <p>New to Netflix ? <Link to="/register">Sign Up </Link>Now.</p>
                    <p>Back to <Link to="/">Homepage</Link></p>
                    <p>Forget Password ? <Link to="/">Reset Now</Link></p>
                </div>
               
            </div>
        </div>
    )
}
