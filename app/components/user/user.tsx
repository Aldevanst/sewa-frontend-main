import {useEffect, useState} from "react";
import axios from 'axios';

// GET
const GetUser = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const query = await fetch('http://localhost:3001/user/get');
      const response = await query.json();
      console.log("respone from API :", response)
      setUserInfo(response)
    }
    getData();
  },[])

  return(
  <>
    <h3>:</h3>
    {
      userInfo && userInfo.length && userInfo.map((user:any, index: any)=> (
        <div key={index}>{index+1}. {user.name}</div>
      ))
    }
  </>)
}

// POST
const CreateUser = ()  => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  const handleChange = (e:any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/user/post', userData) ; // Sesuaikan dengan URL endpoint NestJS Anda
      const responseData = response.data;
      console.log(responseData); // Lakukan sesuatu dengan respons dari server
    } catch (error) {
      console.error('Error sending data:', error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama:
        <input type="text" name="name" value={userData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
      </label>
      <br />
      <label>
        Nomor Telepon:
        <input type="text" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Kirim Data</button>
    </form>
  );
}

// UPDATE
const UpdateUser = () => {
    const [userId, setUserId] = useState('');
    const [updatedUserData, setUpdatedUserData] = useState({
      name: '',
      email: '',
      password: '',
      phoneNumber: ''
    });
    const [isUpdated, setIsUpdated] = useState(false);
  
    const handleInputChange = (e:any) => {
      setUpdatedUserData({ ...updatedUserData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      try {
        const response = await axios.patch(`http://localhost:3001/user/${userId}/update`, updatedUserData);
        const updatedUserResponse = response.data;
        console.log('Updated user:', updatedUserResponse);
        setIsUpdated(true);
      } catch (error) {
        console.error('Error updating user:', error);
        console.error('server error:', error.response.data)
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            ID Pengguna:
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </label>
          <br />
          <label>
            Nama:
            <input type="text" name="name" value={updatedUserData.name} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={updatedUserData.email} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={updatedUserData.password} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Nomor Telepon:
            <input type="text" name="phoneNumber" value={updatedUserData.phoneNumber} onChange={handleInputChange} />
          </label>
          <br />
          <button type="submit">Perbarui Pengguna</button>
        </form>
  
        {isUpdated && <p>Data pengguna berhasil diperbarui!</p>}
      </div>
    );
  };

// DELETE
const DeleteUser = () => {
    const [userId, setUserId] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);
  
    const handleInputChange = (e:any) => {
      setUserId(e.target.value);
    };
  
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      try {
        const response = await axios.delete(`http://localhost:3001/user/${userId}/remove`);
        const removedUserDto = response.data;
        console.log('Removed user:', removedUserDto);
        setIsDeleted(true);
      } catch (error) {
        console.error('Error removing user:', error);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Masukkan ID Pengguna:
            <input type="text" value={userId} onChange={handleInputChange} />
          </label>
          <button type="submit">Hapus Pengguna</button>
        </form>
  
        {isDeleted && <p>Pengguna berhasil dihapus!</p>}
      </div>
    );
  };
  

export default GetUser;