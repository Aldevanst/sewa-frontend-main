'use client'
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';


export default function Home({params}:{params:{userID:any}}) {
  // useEffect(() => {
  //   const getData = async () => {
  //     const query = await fetch('http://localhost:3001/user/get');
  //     const response = await query.json();
  //     console.log("respone from API :", response)
  //     setUserInfo(response)
  //   }
  //   getData();
  // },[])
  return (
    <div style={{background:"linear-gradient(0deg,rgb(10, 60, 224),rgba(232, 116, 214, 0.728),rgba(5, 177, 186, 0.774))", width:'auto',height:'110vh'}}>
      <Head>
        <title>Next.js Ideal Main Page</title>
        <meta name="description" content="Contoh main page ideal dengan Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 ><center>Selamat datang di Penyewaan Gedung</center></h1>
        <h2>""</h2>
        <br />
        <ul style={{fontSize:'35px'}}>
          <li><Link href={`/client/building/${params.userID}`}>Buat Reservasi</Link></li><br />
          <li><Link href={`/client/user/${params.userID}/update`}>Edit Prodile</Link></li><br />
          <li><Link href={`/client/building/${params.userID}/daftar`}>Daftar Gedung</Link></li><br />
          <li><Link href={`/client/user/${params.userID}/check`}>Check Reservasi</Link></li><br />
        </ul>
        

        <div >
         
         
        </div>
      </main>

      <footer style={{display:'flex', justifyContent:'center',width:'auto'  ,height:'100vh'}}>
        <h3>© {new Date().getFullYear()} Next.js Ideal Main Page</h3>
      </footer>
    </div>
  );
}

