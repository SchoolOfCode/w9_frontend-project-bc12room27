import "../Main/App.css";

function Display(props) {
  const { selectedTopic } = props;
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
      <p>{selectedTopic.summary}</p>
      <p>{selectedTopic.notes}</p>
    </div>
  );
}

export default Display;
