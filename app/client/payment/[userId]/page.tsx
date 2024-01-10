'use client'
import {generateRandomReferralCode , generateExpirationTime} from '@/app/components/referal'
import { withAuth } from '@/app/components/withAuth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Payment = ({params}:{params:{userId:any}}) => {
  const router = useRouter();
    const [referralCode, setReferralCode] = useState(generateRandomReferralCode(8));
    const [expirationTime, setExpirationTime] = useState(generateExpirationTime());
    const [submitted, setSubmitted] = useState(false);
    const handleReferral = () => {
      const currentTime = new Date();
      setSubmitted(true)
      setTimeout( () => 
      {router.push(`http://localhost:3000/client/user/${params.userId}`),5000
    })
  
      if (currentTime <= expirationTime) {
        console.log('Referral code is valid.');
        // Lakukan tindakan atau proses yang sesuai dengan penggunaan kode referal di sini
      } else {
        console.log('Referral code has expired.');
        // Handle ketika kode referal telah kedaluwarsa
      }
    };
  
    return (
      <div>
        <p>Referal Code: {referralCode}</p>
        <p>Expiration Time: {expirationTime.toLocaleString()}</p>
        {/* Tampilkan atau gunakan referralCode sesuai kebutuhan Anda */}
        <button onClick={handleReferral}>Bayar Sekarang</button>
        {submitted && <p>Pembayaran Sukses!!</p>}
      </div>
    );
  };
  
  export default withAuth(Payment);