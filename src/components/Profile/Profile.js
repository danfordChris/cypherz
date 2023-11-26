import "./Profile.css";

function Profile() {
  return (
    <div className="profilePage">
      <div className="leftSection">
        <div className="profileInfo">
          <div className="pfp">
            <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"></img>
            <h2>Michelle Knowles</h2>
          </div>
          <div className="emailInfo">
            <span>Email:</span>
            <span>michelleknowles@gmail.com</span>
          </div>
          <div className="IDInfo">
            <span>ID No:</span>
            <span>19711009-00001-1623-01</span>
          </div>
          <div className="phoneInfo">
            <span>Phone:</span>
            <span>+255678645794</span>
          </div>
          <div className="accountInfo">
            <span>Account:</span>
            <span>0986e776564538</span>
          </div>
        </div>
      </div>
      <div className="rightSection">
        <div className="activitySection">
          <h2>Your Activities:</h2>
          <span>Lorem ipsum dolor sit amet consectetur. Tempor magna mi id consequat purus massa cras neque auctor. Mollis tortor</span>
          <input type="button" value="See More"></input>
        </div>
        <div className="offerSection">
          <h2>Your Offers:</h2>
          <span>Lorem ipsum dolor sit amet consectetur. Tempor magna mi id consequat purus massa cras neque auctor. Mollis tortor</span>
          <input type="button" value="See More"></input>
        </div>
        <div className="productSection">
          <h2>Our Products:</h2>
          <span>Lorem ipsum dolor sit amet consectetur. Tempor magna mi id consequat purus massa cras neque auctor. Mollis tortor</span>
          <input type="button" value="See More"></input>
        </div>
      </div>
    </div>
  );
}

export default Profile;