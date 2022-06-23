import "../Main/App.css";
// import GetData from "../Data/GetData";

function Display(props) {
  const { selectedTopic, FetchData } = props;
  return (
    <div className="right-section">
      <h1>{selectedTopic.title}</h1>
      {selectedTopic.resources.map((resource, index) => {
        return (
          <p key={index}>
            {index + 1} {resource}
          </p>
        );
      })}
      <p>{selectedTopic.topic}</p>
      <p>{selectedTopic.notes}</p>
    </div>
  );
}

export default Display;
