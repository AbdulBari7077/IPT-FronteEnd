import React from 'react'
import { Link } from 'react-router-dom'

import './style.css';

export default function SignUp() {
    return (
        <div className="login-body" >
            <div className='login-form'>
                <h2 className='login-header'>Sign Up </h2>
                <form  action="/home">
                <div className='form-field'>
                        <input className='login-form-input' placeholder='User Name' type="text" name="name" required />
                    </div>
                    <div className='form-field'>
                        <input className='login-form-input' placeholder='Email Address' type="text" name="email" required />
                    </div>
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
