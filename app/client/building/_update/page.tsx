'use client'
import { useState } from 'react';
import axios from 'axios';

const UpdateBuilding = () => {
  const [buildingId, setUserId] = useState('');
  const [updatedBuildingData, setUpdatedUserData] = useState({
    buildingName: '',
    buildingAddress: '',
    password: '',
    phoneNumber: ''
  });
  const [isUpdated, setIsUpdated] = useState(false);

  const handleInputChange = (e:any) => {
    setUpdatedUserData({ ...updatedUserData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:3001/user/${buildingId}/update`, updatedUserData);
      const updatedUserResponse = response.data;
      console.log('Updated user:', updatedUserResponse);
      setIsUpdated(true);
    } catch (error) {
      console.error('Error updating user:', error);
      console.error('server error:', error.response.data)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID Pengguna:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </label>
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
      </form>

      {isUpdated && <p>Data pengguna berhasil diperbarui!</p>}
    </div>
  );
};

export default UpdateBuilding;
