import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetPassword } from '../../api/Api';
import './ForgetPassword.css'

const ForgetPassword = ({login}) => {
    const [EmailInput, setEmailInput] = useState();
    const { email } =useParams();
    const userData=JSON.parse(localStorage.getItem('userData'))
    // console.log(email);
    const [formSubmitted, setformSubmitted] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setformSubmitted(true)
        // if(login ==="login"){
        //     console.log(EmailInput);
        // }
        // const { userEmail } = document.forms[0];
        // console.log(userEmail.value);
        
        const response = await resetPassword((login ==="login")?EmailInput:email,userData.token)
        if(response?.data.code === 200) {
            toast.success(!formSubmitted?'Email Sent ,Check Your MailBox !':"Email Re-Sent ,Check Your MailBox !", {
                position: toast.POSITION.TOP_RIGHT,
                classNames:'toster'
            })
        }
        else{
            toast.error(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                classNames:'toster'
            })
        }
       

    }
    return (
        <div className="login-body">
            <ToastContainer />
            <div className='login-form'>
                <h2 className='login-header'>Reset Password Confirmation</h2>
                <form onSubmit={handleSubmit}>
                    {
                        login &&
                        <div className='form-field'>
                            <input  className='login-form-input' style={{width: "300px",marginBottom: "10px"}} placeholder='Confirm Email Address' type="text" name="userEmail" onChange={(e)=>setEmailInput(e.target.value)} required />
                        </div>
                    }
                    <button className="button-Submit" type="submit" > {formSubmitted? `Re-Send Verification Code`:'Send Verification Code'}  </button>
                </form>
                <div className='login-footer'>
                    <p>Back to Netflix ? <Link to="/login">Sign In </Link>Now.</p>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;