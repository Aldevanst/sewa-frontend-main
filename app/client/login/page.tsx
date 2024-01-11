'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/login/user', {
        username,
        password,
      });
      const res = response.data
      const { access_token } = res
      console.log('test:',{access_token})
      localStorage.setItem('token', access_token)
      console.log('local storage:',localStorage)
      const idRes = res.userID
      if (response.data) {
        // Save the token or perform any other actions on successful login
        console.log('Login successful', res);
      } else {
        // Handle error responses
        console.error('Login failed', res);
      }
      router.push(`http://localhost:3000/client/user/${idRes}`)
    } catch (error) {
      console.error('An error occurred during login', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
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
      <button type='submit'>Login</button>
      </form>
      <br />
      <Link href={`/client/user/post`}>Belum Punya Akun?</Link>
    </div>
  );
};

export default Login;
