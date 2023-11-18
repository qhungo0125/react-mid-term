import React from 'react';

export function useLocalStorage() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (data) {
      setData((data) => ({ ...data, token }));
    }
  }, []);
  return data;
}
