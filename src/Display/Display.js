import "../Main/App.css";
// import GetData from "../Data/GetData";

//this component renders the dataObject info on the right-hand div: topic, subtopic, syntax, summary
function Display(props) {
  const { selectedSubTopic } = props;

  //this changes the day from a number to a string value (e.g. monday)
  let actualDay = "";
  if (selectedSubTopic.day === 1) {
    actualDay = "Monday";
  } else if (selectedSubTopic.day === 2) {
    actualDay = "Tuesday";
  } else if (selectedSubTopic.day === 3) {
    actualDay = "Wednesday";
  } else if (selectedSubTopic.day === 4) {
    actualDay = "Thursday";
  } else {
    actualDay = "Friday";
  }

  return (
    <div className="right-section">
      <div className="display-week-and-topic-div">
        <h3>
          {actualDay} - {selectedSubTopic.subtopic}
        </h3>
        <h3 className="display-topic-name-text">({selectedSubTopic.topic})</h3>
      </div>
      <div className="display-summary-div">
        <h4 className="display-summary-heading">Summary</h4>
        <p className="display-summary-text">{selectedSubTopic.summary}</p>
      </div>
      <div className="display-syntax-div">
        <h4 className="display-syntax-heading">Syntax</h4>
        <p className="display-syntax-text">{selectedSubTopic.syntax}</p>
      </div>
    </div>
  );
}

export default Display;
