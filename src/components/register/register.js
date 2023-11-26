import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="signupPage">
      <div className="signupText">
        <h2>Sign Up</h2>
      </div>
      <div className="fullNameFamily">
        <div className="fullNameText">
          <h3>Full Name</h3>
        </div>
        <div className="fullNameBox">
          <input type="text"></input>
        </div>
      </div>
      <div className="emailFamily">
        <div className="emailText">
          <h3>Email</h3>
        </div>
        <div className="emailBox">
          <input type="email"></input>
        </div>
      </div>
      <div className="IDFamily">
        <div className="IDText">
          <h3>National ID</h3>
        </div>
        <div className="IDBox">
          <input type="text"></input>
        </div>
      </div>
      <div className="passwordFamily">
        <div className="passwordText">
          <h3>Password</h3>
        </div>
        <div className="passwordBox">
          <input type="password"></input>
        </div>
      </div>
      <input type="submit" value="Sign Up"></input>
      <div className="regHere">
        <Link to="/Login">
          <span>Already have an account? Log in here!</span>
        </Link>
      </div>
    </div>
  );
}

export default Register;
