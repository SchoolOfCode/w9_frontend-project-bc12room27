import "../Main/App.css";
// import GetData from "../Data/GetData";

function Display(props) {
  const { selectedTopic } = props;
  console.log("Selected topic is:", selectedTopic);
  return (
    <div className="right-section">
      <div className="display-week-and-topic-div">
        <h3 className="display-weektopic-name-text">{selectedTopic.weektopic}</h3>
        <h3 className="display-topic-name-text">({selectedTopic.topic})</h3>
      </div>
        
        {/* {selectedTopic.resources.length > 0 ? (
          selectedTopic.resources.map((resource, index) => {
          return (
            <p key={index}>
              {index + 1} {resource}
            </p>
          );
        })): (<></>)} */}
         
      
        <div className="display-subtopic-div">
          <h3 className="display-subtopic-heading">{selectedTopic.subtopic}</h3>
        </div>
        <div className="display-summary-div">
          <h4 className="display-summary-heading">Summary</h4>
          <p className="display-summary-text">{selectedTopic.summary}</p>
        </div>
        <div className="display-syntax-div">
          <h4 className="display-syntax-heading">Syntax</h4>
          <p className="display-syntax-text">{selectedTopic.syntax}</p>
        </div>
    </div>
  );
}

export default Display;
