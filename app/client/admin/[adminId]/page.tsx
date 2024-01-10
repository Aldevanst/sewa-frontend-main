'use client'
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { withAuthAdmin } from '@/app/components/withAuthAdmin'
import { useRouter } from 'next/navigation';


const AdminPanel = ({ params }:{params:{adminId:any}}) => {
  const router =useRouter();
  const [adminInfo, setAdminInfo] = useState('')
  useEffect(() => {
    const getData = async () => {
      try {
        const query = await fetch(`http://localhost:3001/admin/${params.adminId}`);
        const response = await query.json();
        setAdminInfo(response);
        console.log("response from API :", response);
      } catch (error) {
        console.error('An error occurred while fetching user data', error);
      }
    }
    getData();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("admintoken")
    console.log(localStorage)
    router.push(`http://localhost:3000/`)
  }
  return (
    <div >
      <Head>
        <title>Admin Panel</title>
        <meta name="description" content="Contoh main page ideal dengan Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav><ul>
        <li><Link href={`${params.adminId}/post`}>Buat Akun Admin</Link></li>
        <li><Link href={`${params.adminId}/update`}>Perbarui Akun Admin</Link></li>
      </ul>
        
        
      </nav>
<button onClick={handleLogout}>Logout</button>
      <main >
        <center><h1 >Manage List</h1>
        <h2>"{adminInfo.adminName}"</h2></center>
        <br />
        <ul>
          <li><Link href={`${params.adminId}/getrental`}>Daftar List Reservasi</Link></li>
          <li><Link href={`${params.adminId}/getuser`}>Daftar List User</Link></li>
          <li><Link href={`${params.adminId}/getadmin`}>Daftar List Admin</Link></li>
        </ul>
        

        <div >
         
         
        </div>
      </main>

      <footer style={{display:'flex', justifyContent:'center'}}>
        <h3>© {new Date().getFullYear()}  Ideal Admin Panel</h3>
      </footer>
    </div>
  );
}
export default withAuthAdmin(AdminPanel)

