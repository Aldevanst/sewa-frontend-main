// utils/withAuth.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const withAuthAdmin = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('admintoken');

      if (!token) {
        // Redirect atau navigasi ke halaman login jika tidak ada token
        router.push('/');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};
