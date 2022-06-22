import "./App.css";
import { useState, useEffect } from "react";
import DropDown from "./DropDown/DropDown";
import TopicResults from "./TopicResults/TopicResults";
import Display from "../Display/Display";
import Profile from "../Profile/Profile";

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
  const [userSearch, setUserSearch] = useState("");
  const [data, setData] = useState();
  const [topicsBySearch, setTopicsBySearch] = useState(dummyData);
  const [selectedTopic, setSelectedTopic] = useState({
    title: "Sub Topic",
    resources: [],
    summary: "",
    notes: "",
  });

  const getData = async () => {
    const response = await fetch('http://localhost:3000/api')
    .then((response) => response.json());

    setData(response);
  }

  useEffect(() => {
    getData();
  }, [])

  
  // const [isChecked, setIsChecked] = useState(dummyData[0].complete);

  const handleOnChange = (data) => {
    // setIsChecked(!isChecked);
    data.complete = !data.complete;
    console.log("data: ", data);
  };

  /*const response = fetch("http://localhost:3000", {
    method: GET,
  })

  */

  function resultsFilter() {
    let resultsarr = [];
    let week = userSearch.split(" ");
    dummyData.map((data) => {
      if (data.week === Number(week[1])) {
        resultsarr.push(data);
      }
    });
    resultsarr.sort((a, b) => a.day - b.day);
    console.log(resultsarr);
    setTopicsBySearch(resultsarr);
  }

  useEffect(() => {
    resultsFilter();
  }, [userSearch, selectedTopic]);

  function handleChange(e) {
    e.preventDefault();
    setUserSearch(e.target.value);
  }

  function subTopicClick(topic) {
    let top = {
      title: topic.title,
      resources: topic.resources,
      summary: topic.summary,
      notes: topic.notes,
    };

    setSelectedTopic(top);
  }

  return (
    <div className="App">
      <div className="Profile">
        <h1>Profile</h1>
        <Profile />
      </div>
      <div>
        {data}
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
        <Display selectedTopic={selectedTopic} />
      </div>
    </div>
  );
}

export default App;
