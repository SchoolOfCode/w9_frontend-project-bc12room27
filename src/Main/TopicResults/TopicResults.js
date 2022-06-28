import "../App.css";

function TopicResults(props) {
  const { topics, subTopicClick, toggleCheckboxOnClick } = props;

  function groupBy(arr, property) {
    return arr.reduce(function (memo, x) {
      if (!memo[x[property]]) {
        memo[x[property]] = [];
      }
      memo[x[property]].push(x);
      return memo;
    }, {});
  }

  let arr = groupBy(topics, "day");
  arr = Object.values(arr);

  return (
    <div className="Topic-Container">
      {arr.map((a) => {
        console.log(a);
        return (
          <div className="topic">
            <div className="left-column">
              <div>{a[0].topicTitle}</div>
              <div>
                Week: {a[0].week} <br /> Day: {a[0].day}{" "}
              </div>
              {/* <p className="percentage-text"> x% Complete</p> */}
            </div>
            <div className="right-column">
              {a.map((b, index) => {
                return (
                  <div
                    className="single-topic-container"
                    key={index}
                    onClick={() => subTopicClick(b)}
                  >
                    <div className="sub-topic-div-left">
                      <p className="sub-topic-text">{b.subtopic}</p>
                    </div>
                    <div className="sub-topic-div-right">
                      {b.complete ? (
                        <input
                          className="input-checkbox"
                          type="checkbox"
                          value="Ticked"
                          onChange={() => toggleCheckboxOnClick(b)}
                          checked
                          input
                        />
                      ) : (
                        <input
                          className="input-checkbox"
                          type="checkbox"
                          value="Unticked"
                          onChange={() => toggleCheckboxOnClick(b)}
                          input
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TopicResults;
