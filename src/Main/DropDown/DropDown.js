import '../App.css'

//option values will come from fetches to the database - options.value will be by week (and week overview if possible)
//display week and overview in jsx with `week: {week} - {weekoverview}`

function DropDown(props) {
    const { handleChange } = props
    

  return (
    <div className="Dropdown-Container">
          <label className='Dropdown-Select-Words' htmlFor="topics">Choose a topic: </label>
          <select className='Dropdown-Select' name="topics" onChange={handleChange}>
           
            <option value="Week 1">Week 1</option>
            <option value="Week 2">Week 2</option>
            <option value="Week 3">Week 3</option>
            <option value="Week 4">Week 4</option>
            <option value="Week 5">Week 5</option>
          </select>
        </div>
  );
}

export default DropDown