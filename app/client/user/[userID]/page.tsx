'use client'
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { withAuth } from '@/app/components/withAuth';
import { useRouter } from 'next/navigation';

const Home = ({params}:{params:{userID:any}}) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState('');
  
  useEffect(() => {
    const getData = async () => {
      try {
        const query = await fetch(`http://localhost:3001/user/${params.userID}`);
        const response = await query.json();
        setUserInfo(response);
        console.log("response from API :", response);
      } catch (error) {
        console.error('An error occurred while fetching user data', error);
      }
    }
    getData();
  }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('token')
      console.log(localStorage)
      router.push(`http://localhost:3000/`)
    }

  return (
    <div>
      <Head>
        <title>Next.js Ideal Main Page</title>
        <meta name="description" content="Contoh main page ideal dengan Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <center><h1>Selamat datang di Penyewaan Gedung</h1>
        <h2>Customer : "{userInfo.name}"</h2></center>
       <button onClick={handleLogout}>Logout</button>
        <br />
        <ul style={{ fontSize: '35px' }}>
          <li><Link href={`/client/building/${params.userID}`}>Buat Reservasi</Link></li><br />
          <li><Link href={`/client/user/${params.userID}/update`}>Edit Profil</Link></li><br />
          <li><Link href={`/client/building/${params.userID}/daftar`}>Daftar Gedung</Link></li><br />
          <li><Link href={`/client/user/${params.userID}/check`}>Check Reservasi</Link></li><br />
        </ul>

        <div>

        </div>
      </main>

      <footer style={{ display: 'flex', justifyContent: 'center', width: 'auto', height: '100vh' }}>
        <h3>© {new Date().getFullYear()} Next.js Ideal Main Page</h3>
      </footer>
    </div>
  );
}
export default withAuth(Home)
