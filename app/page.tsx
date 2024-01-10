'use client'
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter();
    const handleUser = () => {
        router.push(`client/login`)
    }
    const handleAdmin = () => {
        router.push(`admin/login`)
    }
    return(
        <div style={{display:'flow', justifyContent:'space-between',background: "linear-gradient(0deg,rgb(10, 60, 224),rgba(232, 116, 214, 0.728),rgba(5, 177, 186, 0.774))", width: 'auto', height: '110vh' }}>
           <div ><h1 style={{marginLeft:"80vh"}}>Aplikasi Penyewaan Gedung</h1>
           </div> 
            <main style={{marginLeft:"87vh", marginTop:'50px'}}><button onClick={handleUser} style={{blockSize:'50px',marginRight:'20px'}}>Login Customer</button>
            <button onClick={handleAdmin} style={{blockSize:'50px',marginLeft:'20px'}}>Login Sebagai Admin</button>
            </main>
        </div>
    )
    
};
