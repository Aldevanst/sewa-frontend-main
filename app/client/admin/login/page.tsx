'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function GetAdmin() {
  const [adminInfo, setAdminInfo] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const query = await fetch('http://localhost:3001/admin/get');
      const response = await query.json();
      console.log("respone from API :", response)
      setAdminInfo(response)
    }
    getData();
  },[])

  return(
  <>
    <h3>:</h3>
    {
      adminInfo && adminInfo.length && adminInfo.map((admin:any, index: any)=> (<ul>
        <li><Link href={`/client/admin/${admin.adminId}`} key={index}>{index+1}. {admin.adminName}| Id = {admin.adminId}</Link></li>
      </ul>
        
      ))
    }
  </>)
}