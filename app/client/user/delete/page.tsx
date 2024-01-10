'use client'
import { useState } from 'react';
import axios from 'axios';

const DeleteUserForm = () => {
  const [userId, setUserId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  const handleInputChange = (e:any) => {
    setUserId(e.target.value);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:3001/user/${userId}/remove`);
      const removedUserDto = response.data;
      console.log('Removed user:', removedUserDto);
      setIsDeleted(true);
    } catch (error) {
      console.error('Error removing user:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Masukkan ID Pengguna:
          <input type="text" value={userId} onChange={handleInputChange} />
        </label>
        <button type="submit">Hapus Pengguna</button>
      </form>

      {isDeleted && <p>Pengguna berhasil dihapus!</p>}
    </div>
  );
};

export default DeleteUserForm;
