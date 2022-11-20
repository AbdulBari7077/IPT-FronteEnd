import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SignUpApi } from '../../api/Api';
import EmailInput from '../../components/Form/EmailInput';

import '../Login/style.css';

export default function SignUp() {
    const HandleSignUp =async (event)=>{
        event.preventDefault();
        const {userName,userEmail , password} = document.forms[0];
        if(await SignUpApi(userName.value,userEmail.value,password.value))
        {
           return console.log("SignUp successful");
        }
        return console.log("SignUp Failed");
    }
    return (
        <div className="login-body" >
            <div className='login-form'>
                <h2 className='login-header'>Sign Up </h2>
                <form  onSubmit={HandleSignUp}>
                <div className='form-field'>
                        <input className='login-form-input' placeholder='User Name' type="text" name="userName" required />
                    </div>
                    <EmailInput/>
                    <div className='form-field'>
                        <input className='login-form-input' placeholder='Password' type="password" name="password" required />
                    </div>
                    <div className='form-field'>
                        <input className='login-form-input' placeholder='Re-Password' type="password" name="re-password" required />
                    </div>
                    <button className="signin-button" type="submit">Register</button>
                </form>
                <div className='login-footer'>
                    <p>Already a User <Link to="/login">Sign In </Link>Now.</p>
                </div>
            </div>
        </div>
    )
}
