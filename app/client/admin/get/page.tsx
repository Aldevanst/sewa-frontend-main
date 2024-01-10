'use client'
import { useEffect, useState } from 'react';


const AdminTable = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const adminData = async () => {
        const response = await fetch('http://localhost:3001/admin/get');
        const data = await response.json();
        console.log('response from API',data)
        setAdmins(data);
      
    };
    adminData();
  }, []);

  return(
    <>
    <h3>Daftar Admin</h3>
    <table>
      <thead>
        <tr>
            <th>No.</th>
          <th>Admin</th>
          <th>Admin Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {admins && admins.length && admins.map((admin:any, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{admin.adminName}</td>
            <td>{admin.email}</td>
            <td>{admin.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>

    
    
  );
};

export default AdminTable;
