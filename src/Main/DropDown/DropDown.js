import '../App.css'


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