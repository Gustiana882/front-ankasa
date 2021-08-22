import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form"
import "./login.scoped.css";
import ilustration from "../../Assets/illustration.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");

    togglePassword.addEventListener("click", function(e) {
      // toggle the type attribute
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      // toggle the eye / eye slash icon
      this.classList.toggle("bi-eye");
    });
  }, []);

  return (
    <div className="d-flex">
      <div className="baground-img">
        <img className="img-airplane" src={ilustration} alt="" />
      </div>

      <aside>
        <div className="formBanner">
          <div className="formTitle">
            <img
              src="https://res.cloudinary.com/rizkazn/image/upload/v1629439821/logo_lgffvi.jpg"
              alt=""
            />
            <span className="text-logo">
              <b> Ankasa</b>
            </span>
            <div className="login-box">
              <h3 className="fw-bold">Login</h3>
              <form className="formRegis">
                <div className="user-box">
                  <input
                    type="username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    required
                  />
                  <label>Username</label>
                </div>
                <div className="d-flex">
                  <div className="user-box">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={handleChange}
                      required
                    />
                    <label>Password</label>
                  </div>
                  <i className="bi bi-eye-slash" id="togglePassword" />
                </div>
                <button
                  className="SignIn"
                  type="submit"
                  handleOnSubmit={handleSubmit}
                  block
                >
                  Sign In
                </button>
              </form>
              <br />
              <p>Did you forgot your password?</p>
              <Link to="/forgotpassword">Tap here for reset</Link>
              <br />
              <hr />
              <p>or sign in with</p>
              <div className="row mb-2">
                <div className="col-6">
                  <button className="btn btn-block btn-social btn-google">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-block btn-social btn-facebook">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Login;
