import "../App.css";

//this component represents the dropdown menu.
//when the dropdown option is changed, the handleWeekChange function is called
function DropDown(props) {
  const { handleWeekChange } = props;

  return (
    <div className="Dropdown-Container">
      <label className="Dropdown-Select-Words" htmlFor="topics">
        Choose a Week:{" "}
      </label>
      <select className="Dropdown-Select" name="topics" onChange={handleWeekChange}>
        <option value="Week 1">Week 1</option>
        <option value="Week 2">Week 2</option>
        <option value="Week 3">Week 3</option>
        <option value="Week 4">Week 4</option>
        <option value="Week 5">Week 5</option>
      </select>
    </div>
  );
}

export default DropDown;

// TEAM - COMPONENT NOTES
// option values will come from fetches to the database - options.value will be by week (and week overview if possible)
// display week and overview in jsx with `week: {week} - {weekoverview}`
// currently the weeks are hard-coded, in the future we could make it more dynamic