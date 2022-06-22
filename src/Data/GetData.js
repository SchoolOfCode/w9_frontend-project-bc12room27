import React, { useState, useEffect }from 'react';
import axios from 'axios';

const GetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
    .get('http://localhost:3000/api')
    .then((res) => {
      console.log(res.data.payload)

      setData(res.data.payload);
    })
    .catch((err) => {
      console.log(err)
    });
  };

    return (
      <div>
        <div>
          {data.map((data) => (
            <div>{data.topic}</div>
          ))}
      </div>
    </div>
    )
}

export default GetData;