import "../App.css";

function TopicResults(props) {
  const { topics, handleClick, toggleFunction, } = props;

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
    <>
      {arr.map((a) => {
        console.log(a);
        return (
          <div className="topic">
            <div className="left-column">
              <div>{a[0].topicTitle}</div>
              <div>
                Week: {a[0].week}, Day: {a[0].day}{" "}
              </div>
              <p className="percentage-text"> x% Complete</p>
            </div>
            {a.map((b, index) => {
              return (
                <div
                  className="single-topic"
                  key={index}
                  onClick={() => handleClick(b)}
                >
                  <p className="sub-title-text">{b.subtopic}</p>
                  {b.complete ? (
                    <input
                      type="checkbox"
                      value="Ticked"
                      onChange={() => toggleFunction(b)}
                      checked
                      input
                    />
                  ) : (
                    <input
                      type="checkbox"
                      value="Unticked"
                      onChange={() => toggleFunction(b)}
                      input
                    />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}

      {/* {topics.length > 0 ? (
        <div className="topic">
          <div className="left-column">
            <div>{topics[0].topicTitle}</div>
            <div>
              Week: {topics[0].week}, Day: {topics[0].day}{" "}
            </div>
            <p className="percentage-text"> x% Complete</p>
          </div>
          <div className="right-column">
            {Object.entries(arr).map((topic, index) => {
              return topic[1].map((t) => {
                return (
                  <div
                    className="single-topic"
                    key={index}
                    onClick={() => handleClick(topic)}
                  >
                    <p className="sub-title-text">{t.title}</p>
                    {t.complete ? (
                      <input
                        type="checkbox"
                        value="Ticked"
                        onChange={() => toggleFunction(t)}
                        checked
                        input
                      />
                    ) : (
                      <input
                        type="checkbox"
                        value="Unticked"
                        onChange={() => toggleFunction(t)}
                        input
                      />
                    )}
                  </div>
                );
              });
            })}
          </div>
        </div>
      ) : (
        <>Choose a Topic</>
      )} */}
    </>
  );
}

export default TopicResults;
