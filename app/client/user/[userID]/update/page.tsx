'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const UpdateUserForm = ({params}:{params:{userID:any}}) => {
  const router = useRouter();
  const [updatedUserData, setUpdatedUserData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  });
  const [isUpdated, setIsUpdated] = useState(false);
  
  const handleReturn = (e:any) => {
    router.push(`http://localhost:3000/client/user/${params.userID}`)
  }

  const handleInputChange = (e:any) => {
    setUpdatedUserData({ ...updatedUserData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:3001/user/${params.userID}/update`, updatedUserData);
      const updatedUserResponse = response.data;
      console.log('Updated user:', updatedUserResponse);
      setIsUpdated(true);
      router.push(`http://localhost:3000/client/user/${params.userID}`)
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div style={{display:'flow', justifyContent:'center'}}>
      
      <form onSubmit={handleSubmit} >
        <h2>Update Data Anda</h2>        
        <br />
        <label>
          Nama:
          <input type="text" name="name" value={updatedUserData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={updatedUserData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={updatedUserData.password} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Nomor Telepon:
          <input type="text" name="phoneNumber" value={updatedUserData.phoneNumber} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Perbarui Pengguna</button>
        <button type='reset' onClick={handleReturn}>Main Page</button>
      </form>
      
      
      
      {isUpdated && <p>Data pengguna berhasil diperbarui!</p>}
    </div>
    
  );
};

export default UpdateUserForm;
