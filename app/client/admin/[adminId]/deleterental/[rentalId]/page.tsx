'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { withAuthAdmin } from '@/app/components/withAuthAdmin';

const DeleteUserForm = ({ params }:{params:{rentalId:any,adminId:any}}) => {
    const router = useRouter();
  const [rentalId, setRentalId] = useState(`${params.rentalId}`);
  const [isDeleted, setIsDeleted] = useState(false);
  console.log('test:',rentalId)

  const handleReturn = () => {
    router.push(`http://localhost:3000/client/admin/${params.adminId}/getrental`)
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:3001/rental/${rentalId}/delete`);
      const removedUserDto = response.data;
      console.log('Removed user:', removedUserDto);
      setIsDeleted(true);
      setTimeout(()=>{
        router.push(`http://localhost:3000/client/admin/${params.adminId}/getrental`),3000
      })
    } catch (error) {
      console.error('Error removing user:', error);
    }
  };

  return (
      <div style={{marginTop: "30px"}}>
      <form onSubmit={handleSubmit}>
        <center><label>
          Apakah Ingin Menghapus Reservasi Ini?
        </label>
        <br /><br />
        <button type="submit">Ya</button>
        <button type='reset' onClick={handleReturn}>Tidak</button>
        </center>
      </form>
      
      {isDeleted && <p>Reservasi berhasil dihapus!</p>}
    </div>
    
  );
};

export default withAuthAdmin(DeleteUserForm);
