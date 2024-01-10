'use client'
// Import file gambar dan komponen Image dari 'next/image'
import Image from 'next/image';
import building1Image from '../img/1.jpeg';
import building2Image from '../img/2.jpeg';
import building3Image from '../img/3.jpeg';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { withAuth } from '@/app/components/withAuth';

const DaftarGedung = ({params}:{params:{userID:any}}) => {
    const router = useRouter();
    const handleReturn = (e:any) => {
        router.push(`http://localhost:3000/client/user/${params.userID}`)
    }
  const buildingOptions = [
    { name: 'Gedung Brawijaya', buildingAddress: 'Surabaya', price: 'Rp15.000.000' },
    { name: 'Gedung Serbaguna Sidoarjo', buildingAddress: 'Sidoarjo', price: 'Rp8.000.000' },
    { name: 'Gedung Ksatria', buildingAddress: 'Surabaya', price: 'Rp7.000.000' },
  ];

  const [buildings, setBuildings] = useState([
    { imageURL: building1Image, description: 'Deskripsi Gedung 1' },
    { imageURL: building2Image, description: 'Deskripsi Gedung 2' },
    { imageURL: building3Image, description: 'Deskripsi Gedung 3' },
  ]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap :"100px" }}>
        {buildings.map((building, index) => (
          <div key={index}>
            {/* Menampilkan gambar gedung menggunakan next/image */}
            <Image src={building.imageURL} alt={`Building ${index + 1}`} width={230} height={150} />

            {/* Menampilkan deskripsi gedung di bawah gambar */}
          </div>
        ))}
      </div>

      <div style={{  display: 'flex' ,marginTop: '20px', justifyContent: 'center', gap:"120px" }}>
        {/* Menampilkan deskripsi gedung dari buildingOptions */}
        {buildingOptions.map((building, index) => (
          <div key={index}>
            <b><p>Deskripsi:</p></b>
            <p>Nama: {building.name}</p>
            <p>Alamat: {building.buildingAddress}</p>
            <p>Rincian Harga: {building.price}</p>
          </div>
        ))}
        
      </div>
      <div style={{justifyContent: 'center',display:'flex',marginTop:'20px'}}>
        <button onClick={handleReturn} style={{blockSize:'40px'}}>Main Page</button></div>
      
    </div>
  );
}

export default withAuth(DaftarGedung)