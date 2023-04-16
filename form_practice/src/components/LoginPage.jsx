import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './page.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

  function handleLogin(e) {
    e.preventDefault();
    // handle login logic here

    // navigate to task page after successful login
    const { from } = location.state || { from: { pathname: '/form' } };
    window.location.href = from.pathname;
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

export default LoginPage;
