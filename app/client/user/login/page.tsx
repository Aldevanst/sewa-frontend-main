'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function GetUser() {
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

  return(
  <>
  <nav><Link href={`/client/user/post`}>Buat Akun</Link></nav>
    <center><h2>Login Low Budget (Test)</h2></center>
    {
      userInfo && userInfo.length && userInfo.map((user:any, index: any)=> (<ul>
        <li><Link href={`/client/user/${user.userID}`} key={index}>{index+1}. {user.name}| Id = {user.userID}</Link></li>
      </ul>
        
      ))
    }
  </>)
}