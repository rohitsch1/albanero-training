import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false);
  
    function handleSignup(e) {
      e.preventDefault();
      // handle signup logic here
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    }
  
    return (
      <div className='signup-page'>
        <h1>Sign up</h1>
        <form className="signup-form" onSubmit={handleSignup}>
          <label>
            Username:
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Sign up</button>
        </form>
        {showSnackbar && (
          <div className="success-snackbar">
            <p>Sign up successful!</p>
            <Link to='/'>Go to login page</Link>
          </div>
        )}
      </div>
    );
  }
  
  export default SignupForm;
  