import React, { useState, useEffect }from 'react';
import axios from 'axios';

const GetResources = () => {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    fetchResource();
  }, []);

  const fetchResource = () => {
    axios
    .get('http://localhost:3000/api/resources')
    .then((res) => {
      // console.log(res.data.payload)

      setResource(res.resource.payload);
    })
    .catch((err) => {
      console.log(err)
    });
  };
  // console.log(data)
    return (
      <div>
        <div>
          {resource.map((data) => (
            <div>
              {/* <div>{data.topic}</div>
              <div>{data.subtopic}</div>  */}
              {/* <div className="data-summary">{data.summary}</div> */}
            </div>
          ))}
      </div>
    </div>
    )
}

export default GetResources;
