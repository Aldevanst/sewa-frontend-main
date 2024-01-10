'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

const BuildingTable = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const buildingData = async () => {
        const response = await fetch('http://localhost:3001/building/get'); // Sesuaikan dengan URL endpoint NestJS Anda
        const data = await response.json();
        console.log('response from API',data)
        setBuildings(data);
        console.log(response)
      
    };
    buildingData();
  }, []);

  return(
    <>
    <h3>Daftar </h3>
    <table>
      <thead>
        <tr>
          <th>Building Name</th>
          <th>Building Address</th>
          <th>Price</th>
          <th>Additional Item</th>
          <th>Nama Pemesan</th>
          <th>Id Pemesan</th>
        </tr>
      </thead>
      <tbody>
        {buildings && buildings.length && buildings.map((build:any, index) => (
          <tr key={index}>
            <td>{build.buildingName}</td>
            <td>{build.buildingAddress}</td>
            <td>{build.price}</td>
            <td>{build.additionalItem}</td>
            <td>{build.user.name}</td>
            <td>{build.user.userID}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>

    
    
  );
};

export default BuildingTable;
