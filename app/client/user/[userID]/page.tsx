'use client'
import Head from 'next/head';
import Link from 'next/link';


export default function Home({params}:{params:{userID:any}}) {
  return (
    <div >
      <Head>
        <title>Next.js Ideal Main Page</title>
        <meta name="description" content="Contoh main page ideal dengan Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 ><center>Selamat datang di Penyewaan Gedung</center></h1>
        <br />
        <ul>
          <li><Link href={`/client/building/${params.userID}`}>Buat Reservasi</Link></li>
          <li><Link href={`/client/user/${params.userID}/update`}>Edit Prodile</Link></li>
          <li><Link href={`/client/building/${params.userID}/daftar`}>Daftar Gedung</Link></li>
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

