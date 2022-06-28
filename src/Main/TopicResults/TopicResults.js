import "../App.css";

function TopicResults(props) {
  const { topicsBySearch, subTopicClick, toggleCheckboxOnClick } = props;

  // This function turns the data array of objects into an array of arrays. This enables us to filter through the data when searching by day and week
  function groupBy(arr, property) {
    return arr.reduce(function (memo, x) {
      if (!memo[x[property]]) {
        memo[x[property]] = [];
      }
      memo[x[property]].push(x);
      return memo;
    }, {});
  }

  //This groups all the topicsBySearch (data) by "day" for the selected week, and then returns in the form of an array of arrays, each containing all objects with matching days. 
  let arr = groupBy(topicsBySearch, "day");
  arr = Object.values(arr);
  console.log("arr: ",arr)

  return (
    <div className="Topic-Container">
      {/* the below line maps through the nested arrays in 'arr'. 'a' represents each item (object) within arr. 'a' is then used to render topic, week & day in the left column using only the first oblect [0] of the array, as all objects within the array will represent the same data */}
      {arr.map((a) => {
        console.log(a);
        return (
          <div className="topic">
            <div className="left-column">
              <div>
                <strong>{a[0].topic}</strong> <br /> Week: {a[0].week} <br /> Day: {a[0].day}{" "}
              </div>
            </div>
            <div className="right-column">
              {/* Map through arr (array of arrays), and render the subtopic and checkbox */}
              {a.map((b, index) => {
                console.log("b: ",b);
                console.log("index: ", index);
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
                      {/* checkbox checks arr object 'complete' status and fires the toggleCheckboxOnClick function to toggle between (true & false)  */}
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
