import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="loginPage">
      <div className="loginText">
        <h2>Log In</h2>
      </div>
      <div className="emailFamily">
        <div className="emailText">
          <h3>Email</h3>
        </div>
        <div className="emailBox">
          <input type="email"></input>
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
      <input type="submit" value="Log In"></input>
      <div className="rememberForget">
        <div className="rememberText">
          <input type="checkbox"></input>
          <span>Remember Me</span>
        </div>
        <div className="forgotText">
          <a>
          <span>Forgot Password?</span>
          </a>
        </div>
      </div>
      <div className="regHere">
        <Link to="/register">
          <span>Don't have an account yet? Register one here!</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
