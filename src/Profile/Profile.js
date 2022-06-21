import '../Main/App.css'

function Profile() {

    return(
        <div className='Profile-Container'>
            <div className="Profile-Image">Profile Image</div>
            <div className="Profile-Info">
                <ul>
                    <li>Name: Dave Brown</li>
                    <li>Age: 27</li>
                    <li>Location: UK</li>
                    <li>Email: davebrown@gmail.com</li>
                </ul>
            </div>
        </div>
    )
} 

export default Profile