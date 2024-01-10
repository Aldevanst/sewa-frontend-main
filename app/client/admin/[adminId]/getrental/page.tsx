'use client'

import { withAuthAdmin } from "@/app/components/withAuthAdmin";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GetRental = ({params}:{params:{adminId:any}}) => {
  const router = useRouter();
  // const [rentalId, setRentalId] = useState();
  
  const [rentalInfo, setRentalInfo] = useState([]);
  useEffect(() => {
    const rentData = async () => {
      const res = await axios.get('http://localhost:3001/rental/get');
      const response = res.data
      console.log("respone from API :", res)
      setRentalInfo(response)
    }
    rentData();
  },[])
  const  handleClickUpdate = (rentalId:any) =>{
    router.push(`http://localhost:3000/client/admin/${params.adminId}/updaterental/${rentalId}`)
  }
  const  handleClickDelete = (rentalId:any) =>{
    router.push(`http://localhost:3000/client/admin/${params.adminId}/deleterental/${rentalId}`)
  }
  const handleReturn = () => {
    router.push(`http://localhost:3000/client/admin/${params.adminId}`)
  }

  return(
  <>
    <h3>Daftar List Penyewa</h3>
    <table>
      <thead>
        <tr>
          <th>Nama Pengguna</th>
          <th>Nama Gedung</th>
          <th>Furniture Tambahan</th>
          <th>Tanggal Pesan</th>
          <th>Tanggal Event</th>
          <th>Keterangan</th>
        </tr>
      </thead>
      <tbody>
        {rentalInfo && rentalInfo.length && rentalInfo.map((rental:any, index: any)=> (
        <tr>
          <th>{rental.userID.name}</th>
          <th>{rental.buildingID.buildingName}</th>
          <th>{rental.buildingID.additionalItem}</th>
          <th>{rental.orderDate}</th>
          <th>{rental.eventDate}</th>
          <th>
            <button  onClick={() => handleClickUpdate(rental.rentalID)}>Update</button>
            <button  onClick={() => handleClickDelete(rental.rentalID)}>Remove</button>
            </th>
          
        </tr>
        
      ))
    }
</tbody>
    </table>
    <br />
    <center><button onClick={handleReturn}>Kembali ke Panel Utama</button></center>
  </>)
}
export default withAuthAdmin(GetRental)
