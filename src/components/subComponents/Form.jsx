import React from 'react';
import { useState } from 'react';
const Form = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`The Email you entered was: ${email}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="form-title">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="form-main">
        <input className="input-email" type="email" id="email" placeholder='Email Address' value={email}  onChange={(e) => setEmail(e.target.value)}/>
        <button className="red-btn signup-btn">
          <span>Get Started</span>
          <span className="chevron-right-arrow" >
            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
              <desc>chevron</desc>
              <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"></path>
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
