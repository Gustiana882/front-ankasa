import React from "react";
import "./Register.scoped.css"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ilustration from "../../Assets/illustration.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
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

  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

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
    <body>
      <div className="register-pict register-color">
        <img className="img-airplane" src={ilustration} alt="" />
      </div>
      <div className="register-layout px-5">
        <div className="register-logo">
          <img
            src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629369063/vector_02_wqpjtu.png"
            alt=""
          />
          <b className="register-font21">Ankasa</b>
        </div>
        <div className="register d-flex flex-column">
          <h3 className="fw-bold">Register</h3>
          <form action="">
          <div className="user-box">
            <input
              type="username"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
            <label>Full Name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="d-flex eye-pass">
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
            type="submit"
            handleOnSubmit={handleSubmit}
            className="register-button-signup register-color"
          >
            Sign Up
          </button>
          </form>
          <div className="register-checkbox-layout">
            <input type="checkbox" className="register-checkbox" />
            <label className="register-font13">
              Accept terms and condition
            </label>
          </div>
          <div className="register-signin">
            <hr />
            <p className="text-center register-font12">
              Already have an account?
            </p>
            <button
              type="button"
              onClick={handleClick}
              className="register-button-signin"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Register