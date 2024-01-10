'use client'
import { withAuth } from "@/app/components/withAuth";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CheckReservation = ({ params }: { params: { userID: any } }) => {
    const router = useRouter();
    const [checkInfo, setCheckInfo] = useState([]);
  
    useEffect(() => {
      const checkingData = async () => {
        try {
          const res = await axios.get(`http://localhost:3001/rental/user/${params.userID}`);
          const response = res.data;
  
          if (response == null || response.length === 0) {
            console.log('Anda Belum Melakukan Reservasi');
            // Set pesan atau lakukan sesuatu jika response kosong
          } else {
            console.log('Response from API:', response);
            setCheckInfo(response);
          }
        } catch (error) {
          console.log('Error from API:', error);
        }
      };
  
      checkingData();
    }, []);
  
    console.log('hasil Check:', checkInfo);
  
    const handleReturn = () => {
      router.push(`http://localhost:3000/client/user/${params.userID}`);
    };
  
    return (
      <div>
        <center><h1>Daftar Pesanan Anda</h1></center>
        {checkInfo.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama bangunan</th>
                <th>Lokasi</th>
                <th>Harga</th>
                <th>Furniture Tambahan</th>
              </tr>
            </thead>
            <tbody>
              {checkInfo.map((check: any, index: any) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{check.buildingID.buildingName}</th>
                  <th>{check.buildingID.buildingAddress}</th>
                  <th>{check.buildingID.price}</th>
                  <th>{check.buildingID.additionalItem}</th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <center><div>Maaf, Anda tidak memiliki daftar reservasi.
            <Link href={`/client/building/${params.userID}`}>(Buat Reservasi)</Link>
          </div>
          </center>
            
        )}
        <center>
          <br /><button onClick={handleReturn}>Kembali ke Main Page</button>
        </center>
      </div>
    );
  }

export default withAuth(CheckReservation)