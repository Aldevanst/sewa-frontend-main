'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { withAuthAdmin } from '@/app/components/withAuthAdmin';

const AdminTable = ({params}:{params:{adminId:any}}) => {
  const router = useRouter();
  const [adminId, setAdminId] = useState(`${params.adminId}`)
  const [admins, setAdmins] = useState([]);
  console.log('test:',adminId)
  useEffect(() => {
    const adminData = async () => {
        const response = await fetch('http://localhost:3001/admin/get');
        const data = await response.json();
        console.log('response from API',data)
        setAdmins(data);
      
    };
    adminData();
  }, []);
  const handleReturn = () => {
    router.push(`http://localhost:3000/client/admin/${params.adminId}`)
  }

  return(
    <>
    <h3>Daftar Admin</h3>
    <table>
      <thead>
        <tr>
            <th>No.</th>
          <th>Admin</th>
          <th>Admin Email</th>
          <th>Admin Password</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {admins && admins.length && admins.map((admin:any, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{admin.adminName}</td>
            <td>{admin.email}</td>
            <td>{admin.password}</td>
            <td>{admin.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <center><button onClick={handleReturn}>Kembali Ke Panel</button></center>
  </>

    
    
  );
};

export default withAuthAdmin(AdminTable);
