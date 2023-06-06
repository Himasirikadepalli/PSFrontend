import React, { useState } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [LoggedIn, setLoggedIn] = useState(false);
  const [InvalidCredentials, setInvalidCredentials] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7230/api/Auth/login', {
        UserName: username,
        Password: password,
      });

      console.log('JWT Token:', response.data);
      // You can store the token in localStorage or a state variable for later use
      setLoggedIn(false);
    } catch (error) {
      console.error('Login failed:', error);
      setInvalidCredentials(false);
    }
  };
  if(LoggedIn){
    return <Redirect to="/HomePage"/>;
  }

  return (
    <div>
      <h2>Login</h2>
      {InvalidCredentials&& <p>InvalidCredentials.Please try again.</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
