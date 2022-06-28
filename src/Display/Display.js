import "../Main/App.css";
// import GetData from "../Data/GetData";




function Display(props) {

  const { selectedSubTopic } = props;

  let actualDay = ""
if (selectedSubTopic.day ==1){
  actualDay = "Monday"
} else if (selectedSubTopic.day ==2){
  actualDay = "Tuesday"
} else if (selectedSubTopic.day ==3){
  actualDay = "Wednesday"
} else if (selectedSubTopic.day ==4){
  actualDay = "Thursday"
} else {
  actualDay = "Friday"
}  

  console.log("Selected topic is:", selectedSubTopic);
  return (
    <div className="right-section">
      <div className="display-week-and-topic-div">
        <h3>{actualDay} - {selectedSubTopic.subtopic}</h3>
        {/* <h3 className="display-weektopic-name-text">{selectedSubTopic.weektopic}</h3> */}
        <h3 className="display-topic-name-text">({selectedSubTopic.topic})</h3>
      </div>
        
        {/* {selectedSubTopic.resources.length > 0 ? (
          selectedSubTopic.resources.map((resource, index) => {
          return (
            <p key={index}>
              {index + 1} {resource}
            </p>
          );
        })): (<></>)} */}
         
      
       
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
