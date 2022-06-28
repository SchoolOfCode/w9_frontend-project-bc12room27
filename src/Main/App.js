import "./App.css";
import { useState, useEffect } from "react";
import DropDown from "./DropDown/DropDown";
import TopicResults from "./TopicResults/TopicResults";
import Display from "../Display/Display";
import Profile from "../Profile/Profile";
import GetData from "../Data/GetData";
import axios from "axios";
//import dummyData from "./DummyData/DummyData";

function App() {
  const [data, setData] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState("");
  const [topicsBySearch, setTopicsBySearch] = useState(data);
  const [selectedSubTopic, setSelectedSubTopic] = useState({
    title: "Sub Topic",
    resources: [],
    summary: "",
    notes: "",
  });

  

  //function used to fetch data from the deployed database (heroku)
  const fetchData = () => {
    axios
      .get("https://projectweekroom27.herokuapp.com/api")
      .then((res) => {
        setData(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // enables the fetchData function to be called Async
  useEffect(() => {
    fetchData();
  }, []);



  //Function performs when a checkbox is pressed. The data.complete key value toggles between true & false. 
  const toggleCheckboxOnClick = (data) => {
    data.complete = !data.complete;
    console.log("data: ", data);
  };




  // userWeekSelect FUNCTION - EXPLAINED
  // we are creating an empty array (resultsArr)
  // setting a varible to "week" then using .split with the usestate selectedWeek which is spliting it into sub strings by .split(" ")
  // then mapping thru the data to match the users choice (the week in this case (the dropdown choice) e.g "week 1", "week 2" etc)
  //  then pushes the matched data of that week into the empty array "resultsArr"
  // then the data that was collected into the resultsArr (in this case the week) is sorted by using .sort((A,B)) **A is being compared to B then sorted** so if A > B then A will be sorted after B (week 1 day 2 > week 1 day 1 )or if A < B sort A before B ( week 1 day 1 > week 1 day 2)


 

  //This function matches the user's week selection from the dropdown menu with the data for that week. - SEE README FOR FULL FUNCTION BREAKDOWN

  function userWeekSelect() {
    let resultsArr = [];
    let week = selectedWeek.split(" ");
    console.log("selectedWeek: ", selectedWeek);
    data.map((dataObject) => {
      if (dataObject.week === Number(week[1])) {
        resultsArr.push(dataObject);
        console.log(("dataObject: ", dataObject))
      }
    });

    // This part of the function sorts the days of the week in order.
    resultsArr.sort((a, b) => a.day - b.day);
    console.log("resultsArr: ", resultsArr);
    setTopicsBySearch(resultsArr);
  }

  // enables the userWeekSelect function to be called Async - rendering only selectedWeek & selectedSubTopic
  useEffect(() => {
    userWeekSelect();
  }, [selectedWeek, selectedSubTopic]);

  // When the week in the dropdown is changed, this function is called and the Selected week state is updated to the user's week selection
  function handleWeekChange(e) {
    e.preventDefault(); //PURPOSE?
    setSelectedWeek(e.target.value);
  }


  // when a sub topic is clicked, the subTopicClick function is called and the selectedSubTopic state is updated with the newData  
  function subTopicClick(dataObject) {
    let newData = {
      topic: dataObject.topic,
      subtopic: dataObject.subtopic,
      weektopic: dataObject.weektopic,
      summary: dataObject.summary,
      syntax: dataObject.syntax,
      day: dataObject.day,
    };
    setSelectedSubTopic(newData);
  }

  return (
    <div className="app-container">
      <div className="header-container">
        <div className="header-child">
          <h1 className="header-title">HappyCamper</h1>
        </div>
      </div>
      <div className="profile-main-display-container">
        <div className="Profile">
          <Profile />
          <div>
            <GetData />
          </div>
        </div>
        <div></div>

        <div className="main-section">
          <DropDown handleWeekChange={handleWeekChange} />
          <TopicResults
            topics={topicsBySearch}
            toggleCheckboxOnClick={toggleCheckboxOnClick}
            subTopicClick={subTopicClick}
          />
        </div>

        <div className="display">
          <Display selectedSubTopic={selectedSubTopic} />
        </div>
      </div>
    </div>
  );
}

export default App;
