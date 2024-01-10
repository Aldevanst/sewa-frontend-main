'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { withAuthAdmin } from '@/app/components/withAuthAdmin';

const UpdateUserForm = ({ params }:{params:{rentalId:any,adminId:any}}) => {
  const router = useRouter();
  const [rentalId, setRentalId] = useState(`${params.rentalId}`);
  const [updatedRentalData, setUpdatedRentalData] = useState({
    eventDate: '',
  });
  const [isUpdated, setIsUpdated] = useState(false);
  
  const handleReturn = (e:any) => {
    router.push(`http://localhost:3000/client/admin/${params.adminId}/getrental`)
  }

  const handleUpdate = (e:any) => {
    setUpdatedRentalData({ ...updatedRentalData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:3001/rental/${rentalId}/update`, updatedRentalData);
      const rentalResponse = response.data;
      console.log('Updated data:', rentalResponse);
      setIsUpdated(true);
      setTimeout(() => {
        router.push(`http://localhost:3000/client/admin/${params.adminId}/getrental`)}, 1000);
      
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      
      <form onSubmit={handleSubmit} >
        <label ><center><h2>Update Waktu Pesanan</h2></center></label>
        <br /><br />
        <label>
         Tanggal Pemakaian
          <input type="date" name="eventDate" value={updatedRentalData.eventDate} onChange={handleUpdate} />
        </label>
       <br /><br />
        <center><button type="submit">Perbarui Pengguna</button></center>
        <button type='reset' onClick={handleReturn}>Kembali Ke Daftar</button>
      <br /><br />
      {isUpdated && <p>Data Reservasi berhasil diperbarui!</p>}
      </form>
      
      
    </div>
      
    
  );
};

export default withAuthAdmin(UpdateUserForm);
