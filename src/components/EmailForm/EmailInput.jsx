import React, { useEffect, useState } from 'react'
export default function EmailInput() {
    const [email, setEmail] = useState('');
    useEffect(() => {
        const userEmail = JSON.parse(localStorage.getItem('userEmail'));
        if (userEmail) {
            setEmail(userEmail);
        }
    }, []);
    return(
        <div className='form-field'>
            <input className='login-form-input' placeholder='Email Address' value={email} type="text" name="userEmail" onChange={(e) => setEmail(e.target.value)} required />
        </div>
    );
}