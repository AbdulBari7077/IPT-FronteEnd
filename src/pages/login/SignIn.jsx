import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { checkUserSubscribed, LoginApi } from '../../api/Api';
import EmailInput from '../../components/EmailForm/EmailInput';
import './style.css';

export default function SignIn() {
    const navigate = useNavigate();
   
    const HandleLogin =async (event)=>{
        event.preventDefault();
        const {userEmail , password} = document.forms[0];
        const response = await LoginApi(userEmail.value,password.value);
        console.log(response,"REsponse");
        if(response.data.uid)
        {
            console.log("Login successful");
            const userData={ 
                "uid": response.data.uid,
                "token":response.data.token,
            }
            console.log("USERDATA",userData);
            localStorage.setItem('userData', JSON.stringify(userData));
            const isSubscribed = await checkUserSubscribed(userData.uid,userData.token);
            if(isSubscribed.data.code === 200 )
            {
                if(response.data.isVerified && isSubscribed.data.message)
                {
                    return navigate('/home');
                }
                else{
                    return navigate('/choosePlan');
                }
                // return isSubscribed.data.message?navigate('/home'):navigate('/choosePlan');
            }
            // const isSubscribed = await checkUserSubscribed(response.data.uid,response.data.token);
            // return isSubscribed.data.message?navigate('/home'):navigate('/choosePlan');
            // return navigate('/choosePlan');
        }
        else{
            alert(response.data.message);
            return console.log("Login Failed");
        }
    }
    useEffect(() => {
        async function fetchData(){
            const userData = JSON.parse(localStorage.getItem('userData'));
            if(!userData){
                return navigate('/login');
            }
        };
        fetchData();
    }, []);
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
                    <p>Forget Password ? <Link to="/forgetPassword">Reset Now</Link></p>
                </div>
               
            </div>
        </div>
    )
}
