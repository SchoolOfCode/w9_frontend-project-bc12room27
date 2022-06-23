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
      <p>{selectedTopic.topic}</p>
      <p>{selectedTopic.subtopic}</p>
      <p>{selectedTopic.summary}</p>
    </div>
  );
}

export default Display;
