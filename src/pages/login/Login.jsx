import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header';

import './style.css';

export default function Login() {
    return (
        <div className="login-body">
            <div className='login-form'>
                <h2 className='login-header'>Sign In </h2>
                <form action="/home">
                    <div className='form-field'>
                        <input className='login-form-input' placeholder='Email Address' type="text" name="first_name" required />
                    </div>
                    <div className='form-field'>
                        <input className='login-form-input' placeholder='Password' type="password" name="password" required />
                    </div>
                    <button className="signin-button" type="submit">Sign In</button>
                </form>
                <div className='login-footer'>
                    <p>New to Netflix?<Link to="/register">Sign Up </Link>Now.</p>
                    <p>Back to <Link to="/">Homepage</Link></p>
                </div>
            </div>
        </div>
    )
}
