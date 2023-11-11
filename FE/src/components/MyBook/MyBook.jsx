import React, { useState, useEffect } from 'react';
import axios from 'axios';
const MyBook = () => {
  const [datas, setDatas] = useState([]);
  const [IsLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('http://localhost:5000/myBook', {
          headers: {
            cookie: 'test',
            access_token: localStorage.getItem('accessToken'),
          },
          withCredentials: true,
        });
        if (res.status === 200) {
          console.log(res.data);
        }
      } catch (err) {
        console.error(err); // Changed 'console.log' to 'console.error' for error logging
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return <h1>hiii</h1>;
};

export default MyBook;
