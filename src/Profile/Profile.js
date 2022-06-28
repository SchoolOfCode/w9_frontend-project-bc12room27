import "../Main/App.css";

//this component renders the profile section on the left-hand div

function Profile() {
  return (
    <div className="Profile-Container">
      <div className="Welcome">
        <h3 className="Welcome-Text">Welcome,</h3>
        <h4 className="Welcome-Name">Dave</h4>
      </div>
      <div className="Profile-Image-Container">
        <div className="Profile-Image"></div>
      </div>
      <div className="Profile-Info">
        <p>
          <strong>Email:</strong> dave@gmail.com
        </p>
        <p>
          <strong>Bio:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
          repudiandae consequuntur voluptatum laborum numquam blanditiis harum
          quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
          rerum! Provident similique accusantium nemo autem.
        </p>
      </div>
    </div>
  );
}

export default Profile;
