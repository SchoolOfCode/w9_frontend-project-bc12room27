import "./App.css";
import "../Main/DaySection/DaySection";
import DaySection from "../Main/DaySection/DaySection";
import { useState, useEffect } from "react";

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
];

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [topicsBySearch, setTopicsBySearch] = useState(dummyData);
  const [selectedTopic, setSelectedTopic] = useState({
    title: "Learning Point",
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
      {/* <h1>Our App</h1>
      <DaySection/> */}
      <div className="main-section">
        {/* // headers  */}
        {/* // SELECTION COMPONENT */}

        <div className="options">
          <label htmlFor="topics">Choose a topic:</label>
          <select name="topics" onChange={handleChange}>
            <option value="Fundamentals of Javascript">
              Fundamentals of Javascript
            </option>
            <option value="React">React</option>
            <option value="Node">Node</option>
            <option value="SQL">SQL</option>
          </select>
        </div>
      </div>

      {/* Results output */}
      {topicsBySearch.length > 0 ? (
        <div className="topic">
          <div className="left-column">
            <div>{topicsBySearch[0].topicTitle}</div>
            <p>Completion %</p>
          </div>
          <div className="right-column">
            {topicsBySearch.map((topic ,index) => {
              return (
                <div className="single-topic" onClick={()=>subTopicClick(topic)}>
                  <p>{topic.title}</p>
                  <p>
                    Week: {topic.week} Day: {topic.day}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>Choose a Topic</>
      )}

      <div className="right-section">
        <h1>{selectedTopic.title}</h1>
        {selectedTopic.resources.map((resource, index)=> {
          return <p>{index+1} {resource}</p>
        })}
        <p>{selectedTopic.summary}</p>
        <p>{selectedTopic.notes}</p>
      </div>
    </div>
  );
}

export default App;
