// pages/rental/[userId]/[buildingId]/index.js
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { withAuth } from '@/app/components/withAuth';

const RentForm = ({params}:{params:{userId:any}}) => {
  const router = useRouter();
  const [rentalData, setRentalData] = useState({
    orderDate: new Date().toISOString().split('T')[0],
    eventDate: '',
  })

  const [buildingIds, setBuildingIds] = useState('')
  useEffect(() => {
    const buildingData = async () => {
    const buildingRes = await fetch(`http://localhost:3001/building/get`)
    const dataRes = await buildingRes.json();
    if (dataRes && dataRes.length > 0) {
      const highestBuildingId = dataRes.reduce((prev:any, current:any) => {
        return prev.buildingID > current.buildingID ? prev : current;
      });
      const idHighest = highestBuildingId.buildingID
      setBuildingIds(idHighest)
      console.log("test:",idHighest)
    }
    console.log('test data building:',dataRes)
    }
    buildingData();
  },[]);
  
  const handleChange = (e:any) => {
    setRentalData({ ...rentalData, [e.target.name]: e.target.value });
  }


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/rental/${params.userId}/create/${buildingIds}`, JSON.stringify(rentalData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = response.data;
      console.log(responseData);
      router.push(`http://localhost:3000/client/payment/${params.userId}`)
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <form className='form' onSubmit={handleSubmit}>
      <h2><center>Tambahkan Waktu Reservasi</center></h2>
      <label>
        ID Pemesan:
        <input type="text" value={params.userId} readOnly />
      </label>
      <label>
        <input type="hidden" value={buildingIds} readOnly />
      </label>
      <br />
      <label>
        Order Date (Tanggal Pesan) : <span><input type="date" name="orderDate" value={rentalData.orderDate} readOnly /></span>
        
      </label>
      <br />
      <label>
        Event Date (tanngal Pemakaian) : <span><input type="date" name="eventDate" value={rentalData.eventDate} onChange={handleChange} /></span>
        
      </label>
      <br />
      <button type="submit">Kirim Data</button>
    </form></div>
    

  );
}
export default withAuth(RentForm);
