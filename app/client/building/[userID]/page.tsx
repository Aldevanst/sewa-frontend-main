'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { withAuth } from '@/app/components/withAuth';
import { hasUncaughtExceptionCaptureCallback } from 'process';

const BuildingForm = ({ params }:{params:{userID:any}}) => {
  const router = useRouter();
  
  const [userData, setUserData] = useState({
    buildingName: '',
    buildingAddress: '',
    price: '',
    additionalItem: ''
  });
 
  const buildingOptions = [
    { name: 'Gedung Brawijaya', buildingAddress : 'Surabaya' ,price: 'Rp15.000.000' },
    { name: 'Gedung Serbaguna Sidoarjo', buildingAddress : 'Sidoarjo' ,price: 'Rp8.000.000' },
    { name: 'Gedung Ksatria', buildingAddress : 'Surabaya' ,price: "Rp7.000.000" },
  ];
  const [userInfo , setUserInfo] = useState({})
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
  const handleChangeUser = (e:any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleBuildingNameChange = (e: any) => {
  const selectedOption = buildingOptions.find((option) => option.name === e.target.value); 
  setUserData({
    ...userData,
    buildingName: e.target.value,
    buildingAddress: selectedOption ? selectedOption.buildingAddress : '',
    price: selectedOption ? selectedOption.price : '',
  });
};

const handleReturn = (e:any) => {
  router.push(`http://localhost:3000/client/user/${params.userID}`)
}

const [showSubmitButton, setShowSubmitButton] = useState(true);


const handleSubmit =async (e:any) => {
  e.preventDefault();
  setShowSubmitButton(false)
  
}

  const handleNewSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/building/${params.userID}/create`,(userData)
      );
      const responseData = response.data;
   
      console.log('Respon dari Building',responseData);
      router.push(`http://localhost:3000/client/rental/${params.userID}`)
    } catch (error) {
      console.error('Error sending data building:', error);
      // console.error("error dari server:",error.response.data)
      
    }
  };
  

  return (
    <div style={{display:'flow',justifyContent:'center'}}>
    <form onSubmit={handleNewSubmit}>
      <h1>Form Reservasi</h1>
      <label>
        Nama Pemesan:
        <input type="text" value={userInfo.name} readOnly />
      </label>
      <br />
      <label>
        Building Name:
        <select name="buildingName" value={userData.buildingName} onChange={handleBuildingNameChange}>
          <option value="">Select an Building</option>
          {buildingOptions.map((option, index) => (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Building Address:
        <input type="string" name="buildingAddress" value={userData.buildingAddress} readOnly />
      </label>
      <br />
      <label>
        Estimation Price:
        <input type="text" name="price" value={userData.price} readOnly />
      </label>
      <br />
      
      <label>
        Additional Furniture:
        <input type="text" name="additionalItem" value={userData.additionalItem} onChange={handleChangeUser} />
      </label>
      <br />{
        showSubmitButton ? (<button onClick={handleSubmit}> Kirim Pemesanan</button> ):(
        <label >
          <button type='submit'>Apakah Anda Yakin?</button>
          <br/>Anda tidak dapat Membatalkan Pesanan Ini
          </label>
          
        )
      }
      <br /><br />
     
      </form> <button onClick={handleReturn}>Kembali
      </button>
      </div>
  );
}
export default withAuth(BuildingForm)