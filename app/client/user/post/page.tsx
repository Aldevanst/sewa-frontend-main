'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CreateUser() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  const handleChange = (e:any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/user/post', userData) ; // Sesuaikan dengan URL endpoint NestJS Anda
      const responseData = response.data;
      console.log(responseData); // Lakukan sesuatu dengan respons dari server
      router.push(`http://localhost:3000/client/login`)
    } catch (error) {
      console.error('Error sending data:', error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2><center>Sign Up</center></h2><br />
      <label>
        Nama:
        <input type="text" name="name" value={userData.name} onChange={handleChange} />
      </label>
      <br /><br />
      <label>
        Email:
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
      </label>
      <br /><br />
      <label>
        Password:
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
      </label>
      <br /><br />
      <label>
        Nomor Telepon:
        <input type="text" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Kirim Data</button>
    </form>
  );
}
