import '../App.css'


function TopicResults(props) {
   
    const {topics, handleClick} = props;

  return (
      <>
    {topics.length > 0 ? (
        <div className="topic">
          <div className="left-column">
            <div>{topics[0].topicTitle}</div>
            <div>Week: {topics[0].week}, Day: {topics[0].day} </div>
            <p className='percentage-text'> x% Complete</p>
          </div>
          <div className="right-column">
            {topics.map((topic ,index) => {
              return (
                <div className="single-topic" key={index} onClick={()=>handleClick(topic)}>
                  <p className='sub-title-text'>{topic.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>Choose a Topic</>
      )}
      </>
  );
}


export default TopicResults


