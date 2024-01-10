'use client'
import Head from 'next/head';
import Link from 'next/link';


export default function AdminPanel({ params }:{params:{adminId:any}}) {
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

      <main >
        <h1 ><center>Manage List</center></h1>
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
        <h3>© {new Date().getFullYear()} Next.js Ideal Main Page</h3>
      </footer>
    </div>
  );
}

