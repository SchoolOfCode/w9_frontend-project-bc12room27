import '../App.css'

//option values will come from fetches to the database - options.value will be by week (and week overview if possible)
//display week and overview in jsx with `week: {week} - {weekoverview}`

function DropDown(props) {
    const { handleChange } = props
    

  return (
    <div className="DropDown">
          <label htmlFor="topics">Choose a topic:</label>
          <select name="topics" onChange={handleChange}>
            <option value="Fundamentals of Javascript">
              Fundamentals of Javascript
            </option>
            <option value="React">React</option>
            <option value="Node">Node</option>
            <option value="SQL">SQL</option>
          </select>
        </div>
  );
}

export default DropDown