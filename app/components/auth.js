// utils/auth.js
import axios from 'axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:3001/auth/login', {
      username,
      password,
    });

    const { access_token } = response.data;
    // Simpan token di cookie atau localStorage sesuai kebutuhan
    // Misalnya, menggunakan library js-cookie:
    // import Cookies from 'js-cookie';
    // Cookies.set('token', access_token);

    localStorage.setItem('token', access_token);

    return true; // Atau sesuai respons login dari server
  } catch (error) {
    console.error('Login failed:', error);
    console.error("Server Problem:",error.response.data)
    return false; // Atau sesuai respons login dari server
  }
};
