'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { withAuthAdmin } from '@/app/components/withAuthAdmin';

const UpdateUserForm = ({params}:{params:{adminId:any}}) => {
  const router = useRouter();
  const [updatedAdminData, setUpdatedAdminData] = useState({
    adminName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });
  const [isUpdated, setIsUpdated] = useState(false);
  
  const handleReturn = (e:any) => {
    router.push(`http://localhost:3000/client/admin/${params.adminId}`)
  }

  const handleInputChange = (e:any) => {
    setUpdatedAdminData({ ...updatedAdminData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:3001/user/${params.adminId}/update`, updatedAdminData);
      const updatedUserResponse = response.data;
      console.log('Updated admin:', updatedUserResponse);
      setIsUpdated(true);
      router.push(`http://localhost:3000/client/admin/${params.adminId}`)
    } catch (error) {
      console.error('Error updating admin:', error);
    }
  };

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      
      <form onSubmit={handleSubmit} >
        <center><h2>Update Data Admin</h2></center>
       <br /><br />
        <label >
          ID Admin:
          <input type="text" value={params.adminId} readOnly />
        </label>
        <br /><br />
        <label>
          Nama:
          <input type="text" name="adminName" value={updatedAdminData.adminName} onChange={handleInputChange} />
        </label>
        <br /><br />
        <label>
          Email:
          <input type="email" name="email" value={updatedAdminData.email} onChange={handleInputChange} />
        </label>
        <br /><br />
        <label>
          Password:
          <input type="password" name="password" value={updatedAdminData.password} onChange={handleInputChange} />
        </label>
        <br /><br />
        <label>
          Nomor Telepon:
          <input type="text" name="phoneNumber" value={updatedAdminData.phoneNumber} onChange={handleInputChange} />
        </label>
        <br /><br />
        <button type="submit">Perbarui Pengguna</button>
        <button type='reset' style={{marginLeft:'20px'}} onClick={handleReturn}>Kembali Ke Panel</button>
      </form>
      
      
      {isUpdated && <p>Data Admin berhasil diperbarui!</p>}
    </div>
  );
};

export default withAuthAdmin(UpdateUserForm);
