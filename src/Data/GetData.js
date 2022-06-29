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
      // console.log(res.data.payload)

      setData(res.data.payload);
    })
    .catch((err) => {
      console.log(err)
    });
  };
  // console.log(data)
    return (
      <div>
        <div>
          {data.map((data) => (
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

export default GetData;


// const filterData = () => {
//   let selected = {selectedTopic}
//   if {selectedTopic} {

//   }
//   data.filter()
//   data.{selectedTopic}
// }

// const result = data.filter(
//   data => data.{param}
// )