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
    completion: 0,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
  },
  {
    id: 2,
    title: "Variables",
    week: 1,
    day: 1,
    topicTitle: "Fundamentals of Javascript",
    completion: 0,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
  },
  {
    id: 3,
    title: "Components",
    week: 6,
    day: 3,
    topicTitle: "React",
    completion: 0,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
  },
  {
    id: 4,
    title: "Hooks",
    week: 6,
    day: 3,
    topicTitle: "React",
    completion: 0,
    summary: "this is a summary",
    resources: ["resource 1", "resource 2"],
    notes: "",
  },
  {
  id: 5,
  title: "Props",
  week: 6,
  day: 3,
  topicTitle: "React",
  completion: 0,
  summary: "this is a summary",
  resources: ["resource 1", "resource 2"],
  notes: "",
},
{
  id: 6,
  title: "Functions",
  week: 1,
  day: 1,
  topicTitle: "Fundamentals of Javascript",
  completion: 0,
  summary: "this is a summary",
  resources: ["resource 1", "resource 2"],
  notes: "",
},
];

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [topicsBySearch, setTopicsBySearch] = useState(dummyData);
  const [selectedTopic, setSelectedTopic] = useState({
    title: "Sub Topic",
    resources: [],
    summary: "",
    notes: "",
  });

  function resultsFilter() {
    let resultsarr = [];
    let results = dummyData.map((data) => {
      if (data.topicTitle === userSearch) {
        resultsarr.push(data);
      }
    });
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

    let top = {    title: topic.title,
    resources: topic.resources,
    summary: topic.summary,
    notes: topic.notes}

    setSelectedTopic(top)
  }


  return (
    <div className="App">
      <div className="Profile">
        <h1>Profile</h1>
        <Profile />
      </div>
     
      <div className="main-section">
        {/* // headers  */}
        <h1>Our App</h1>
        {/* // SELECTION COMPONENT */}
        <DropDown handleChange={handleChange}  />
         {/* RESULTS OUTPUT */}
        <TopicResults topics={topicsBySearch} handleClick={subTopicClick} />
         {/* RESULTS OUTPUT */}
         <TopicResults topics={topicsBySearch} handleClick={subTopicClick} />
          {/* RESULTS OUTPUT */}
        <TopicResults topics={topicsBySearch} handleClick={subTopicClick} />
         {/* RESULTS OUTPUT */}
         <TopicResults topics={topicsBySearch} handleClick={subTopicClick} />
          {/* RESULTS OUTPUT */}
        <TopicResults topics={topicsBySearch} handleClick={subTopicClick} />
      </div>
     
      <div className="display">
        <Display selectedTopic={selectedTopic} />
      </div>
      

    </div>
  );
}

export default App;
