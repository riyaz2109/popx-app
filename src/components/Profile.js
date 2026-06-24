
// Make sure your image file is in the same folder as this Profile.js file
import myPic from './profile-pic.jpg'; 

export default function Profile() {
  return (
    <div className="screen profile-screen">
      <div className="profile-header">
        Account Settings
      </div>

      <div className="profile-info">
        <div className="avatar-container">
          {/* This points to the image you imported at the top */}
          <img src={myPic} alt="Profile" />
          <div className="camera-badge">
            📷
          </div>
        </div>
        <div className="profile-details">
          <h3>Shaik Riyaz pasha</h3>
          <p>riyazpashashaik2109@gmail.com</p>
        </div>
      </div>

      <div className="profile-bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
    </div>
  );
}