import React from 'react';
import { useNavigate } from 'react-router-dom';

export function useLocalStorage() {
  const [data, setData] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userid');

    if (token && userId) {
      setData((data) => ({ ...data, token, userId }));
    } else {
      alert('You are not logined');
      navigate('/login');
    }
  }, []);
  return data;
}
