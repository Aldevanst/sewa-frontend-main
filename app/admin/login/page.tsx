'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [adminname, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/login/admin', {
        adminname,
        password,
      });
      const res = response.data
      const {access_token} = res
      localStorage.setItem('token', access_token)
      localStorage.setItem('admintoken', access_token)
      console.log('local storage:',localStorage)
      const idRes = res.adminId
      if (res.ok) {
        // Save the token or perform any other actions on successful login
        console.log('Login successful', res);
      } else {
        // Handle error responses
        console.error('Login failed', res);
      }
      router.push(`http://localhost:3000/client/admin/${idRes}`)
    } catch (error) {
      console.error('An error occurred during login', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
      <h1>Login Admin</h1>
      <label>
        Username:
        <input
          type="text"
          value={adminname}
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
      <button type='submit'>Login</button>
      </form>
      <br />
    </div>
  );
};

export default Login;
