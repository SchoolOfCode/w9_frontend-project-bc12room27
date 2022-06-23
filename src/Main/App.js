import "./App.css";
import { useState, useEffect } from "react";
import DropDown from "./DropDown/DropDown";
import TopicResults from "./TopicResults/TopicResults";
import Display from "../Display/Display";
import Profile from "../Profile/Profile";
import GetData from "../Data/GetData";
import axios from 'axios';

const dummyData = [
  {
    id: 1,
    title: "Arrays",
    week: 1,
    day: 1,
    topicTitle: "Fundamentals of Javascript",
    complete: false,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
    isChecked: false,
  },
  {
    id: 1,
    title: "Arrays",
    week: 1,
    day: 1,
    topicTitle: "Fundamentals of Javascript",
    complete: false,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
    isChecked: false,
  },
  {
    id: 1,
    title: "Arrays",
    week: 1,
    day: 1,
    topicTitle: "Fundamentals of Javascript",
    complete: false,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
    isChecked: false,
  },
  {
    id: 2,
    title: "Variables",
    week: 1,
    day: 2,
    topicTitle: "Fundamentals of Javascript",
    complete: false,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
    isChecked: false,
  },
  {
    id: 3,
    title: "Components",
    week: 1,
    day: 3,
    topicTitle: "React",
    complete: false,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
    isChecked: false,
  },
  {
    id: 4,
    title: "Hooks",
    week: 2,
    day: 3,
    topicTitle: "React",
    complete: false,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
    isChecked: false,
  },
  {
    id: 5,
    title: "Props",
    week: 2,
    day: 2,
    topicTitle: "React",
    complete: false,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
    isChecked: false,
  },
  {
    id: 6,
    title: "Functions",
    week: 2,
    day: 1,
    topicTitle: "Fundamentals of Javascript",
    complete: false,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
    isChecked: false,
  },
];

function App() {
  const [data, setData] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [topicsBySearch, setTopicsBySearch] = useState(dummyData);
  const [selectedTopic, setSelectedTopic] = useState({
    title: "Sub Topic",
    resources: [],
    summary: "",
    notes: "",
  });


    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = () => {
      axios
      .get('https://projectweekroom27.herokuapp.com/api')
      .then((res) => {
        // console.log('name', res.data.payload)
        setData(res.data.payload);
      })
      .catch((err) => {
        console.log(err)
      });
    }
    // useEffect(() => {
    //   console.log(data.value);
    // })
    // console.log(this.data.payload);
  ;  
console.log('Logging Data', data);

///filter array .filter()
//fuction that runs (inside onclick) 
  
  // const [isChecked, setIsChecked] = useState(dummyData[0].complete);
  console.log("Type of Data:", typeof(data))
  console.log("Data 1",data[0])



  const handleOnChange = (data) => {
    // setIsChecked(!isChecked);
    data.complete = !data.complete;
    console.log("data: ", data);
  };
//use dummyData.map for testing -  dummyData.map((data) => {
  function resultsFilter() {
    console.log(data)
    let resultsarr = [];
    let week = userSearch.split(" ");
    data.map((info) => {
      if (info.week === Number(week[1])) {
        resultsarr.push(info);
      }
    })
    resultsarr.sort((a, b) => a.day - b.day);
    // console.log(resultsarr);
    setTopicsBySearch(resultsarr);
  }

  useEffect(() => {
    resultsFilter();
  }, [userSearch, selectedTopic]);

  function handleChange(e) {
    e.preventDefault();
    setUserSearch(e.target.value);
  }

  // fetch data into here - look into!!
  // use setData/data state here to call in fetched data?
  function subTopicClick(topic) {
    let top = {
      topic: topic.topic,
      subtopic: topic.subtopic,
      weektopic: topic.weektopic,
      summary: topic.summary,
    };
    setSelectedTopic(top);
  }


  return (
    <div className="App">
      <div className="Profile">
        <h1>Profile</h1>
        <Profile />
        <div>
          <GetData />
          {/* <p>{this.data.payload}</p> */}
          </div>
      </div>
      <div>
      </div>

      <div className="main-section">
        {/* // headers  */}
        <h1>Our App</h1>
        {/* // SELECTION COMPONENT */}
        <DropDown handleChange={handleChange} />
        {/* RESULTS OUTPUT */}
        {/* {topicsBySearch.map((topic) => {
        return{" "} */}

        <TopicResults
          topics={topicsBySearch}
          toggleFunction={handleOnChange}
          handleClick={subTopicClick}
        />
        {/* // })} */}
      </div>

      <div className="display">
        <Display 
        selectedTopic={selectedTopic} />
      </div>
    </div>
  );
}

export default App;
