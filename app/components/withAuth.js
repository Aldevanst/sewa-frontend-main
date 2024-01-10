// utils/withAuth.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');

      if (!token) {
        // Redirect atau navigasi ke halaman login jika tidak ada token
        router.push('/client/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};
