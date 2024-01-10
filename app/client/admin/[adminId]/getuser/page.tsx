'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GetUser({params}:{params:{adminId:any}}) {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const query = await fetch('http://localhost:3001/user/get');
      const response = await query.json();
      console.log("respone from API :", response)
      setUserInfo(response)
    }
    getData();
  },[])
  const handleReturn = () => {
    router.push(`http://localhost:3000/client/admin/${params.adminId}`)
  }
  return(
  <>
    <center><h2>Daftar List User</h2></center>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Nama User</th>
          <th>Email</th>
          <th>Password</th>
          <th>Nomor Telepon</th>
        </tr>
      </thead>
      <tbody>
        {userInfo && userInfo.length && userInfo.map((user:any,index:any)=>(
          <tr key={index}>
            <th>{index + 1}</th>
            <th>{user.name}</th>
            <th>{user.email}</th>
            <th>{user.password}</th>
            <th>{user.phoneNumber}</th>
          </tr>
        ))}</tbody>
    </table>
    <center><button onClick={handleReturn}>Kembali Ke Panel</button></center>
  </>)
}