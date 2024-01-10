'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CreateAdmin({params}:{params:{adminId:any}}) {
  const router = useRouter();
  const [adminData, setAdminData] = useState({
    adminName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  const handleChange = (e:any) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleReturn = () => {
    router.push(`http://localhost:3000/client/admin/${params.adminId}`)
  }
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/admin/post', adminData) ; // Sesuaikan dengan URL endpoint NestJS Anda
      const responseData = response.data;
      console.log(responseData); // Lakukan sesuatu dengan respons dari server
      router.push(`http://localhost:3000/client/admin/${params.adminId}`)
    } catch (error) {
      console.error('Error sending data:', error);
      
    }
  };

  return (
  <div style={{display:'flex',justifyContent:'center'}}> 
    <form onSubmit={handleSubmit}>
      <h2><center>Sign Up</center></h2><br />
      <label>
        Nama Admin:
        <input type="text" name="adminName" value={adminData.adminName} onChange={handleChange} />
      </label>
      <br /><br />
      <label>
        Email:
        <input type="email" name="email" value={adminData.email} onChange={handleChange} />
      </label>
      <br /><br />
      <label>
        Password:
        <input type="password" name="password" value={adminData.password} onChange={handleChange} />
      </label>
      <br /><br />
      <label>
        Nomor Telepon:
        <input type="text" name="phoneNumber" value={adminData.phoneNumber} onChange={handleChange} />
      </label>
      <br /><br />
      <button type="submit">Kirim Data</button>
      <button type='reset' onClick={handleReturn}style={{marginLeft:'20px'}}>Kembali</button>
    </form></div>
   
  );
}
