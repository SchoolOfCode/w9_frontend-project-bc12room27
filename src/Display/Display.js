import "../Main/App.css";
// import GetData from "../Data/GetData";

function Display(props) {
  const { selectedTopic } = props;
  console.log("Selected topic is:", selectedTopic);
  return (
    <div className="right-section">
      <h1>{selectedTopic.weektopic}</h1>
      {/* {selectedTopic.resources.length > 0 ? (
        selectedTopic.resources.map((resource, index) => {
        return (
          <p key={index}>
            {index + 1} {resource}
          </p>
        );
      })): (<></>)} */}
      <h2>{selectedTopic.topic}</h2>
      <h3>{selectedTopic.subtopic}</h3>
      <p>Summary: <br/>{selectedTopic.summary}</p>
      <p>Syntax: <br/>{selectedTopic.syntax}</p>
      <p>Resources: <br/>{selectedTopic.syntax}</p>
    </div>
  );
}

export default Display;
