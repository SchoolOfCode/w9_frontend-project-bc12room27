import '../App.css'

//option values will come from fetches to the database - options.value will be by week (and week overview if possible)
//display week and overview in jsx with `week: {week} - {weekoverview}`

function DropDown(props) {
    const { handleChange } = props
    

  return (
    <div className="DropDown-Container">
          <label className='Dropdown-Select-Words' htmlFor="topics">Choose a topic:</label>
          <select className='Dropdown-Select' name="topics" onChange={handleChange}>
           
            <option value="Week 1">Week 1 - JS Fundamentals</option>
            <option value="Week 2">Week 2 - API's</option>
            <option value="Week 3">Week 3 - Node </option>
            <option value="Week 4">Week 4 - Back End</option>
          </select>
        </div>
  );
}

export default DropDown