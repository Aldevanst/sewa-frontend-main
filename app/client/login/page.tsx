'use client'
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/login/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Save the token or perform any other actions on successful login
        console.log('Login successful', data);
      } else {
        // Handle error responses
        const errorData = await response.json();
        console.error('Login failed', errorData);
      }
    } catch (error) {
      console.error('An error occurred during login', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <Link href={`client/user/post`}>Belum Punya Akun?</Link>
    </div>
  );
};

export default Login;
