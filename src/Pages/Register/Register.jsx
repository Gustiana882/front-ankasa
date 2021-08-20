import React from "react";
import "./Register.scoped.css"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
    history.push("/login");
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
        <img
          src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629369063/vector_01_1_ffcpvw.png"
          alt=""
        />
        <img
          className="position-absolute"
          src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629386181/tiketing/center_o0uo24.png"
          alt=""
        />
        <img
          className="register-pict-airplane-up"
          src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629386181/tiketing/upper_rtqdcr.png"
          alt=""
        />
        <img
          className="register-pict-airplane-bottom"
          src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629386181/tiketing/bottom_ewmviz.png"
          alt=""
        />
        <img
          className="register-pict-airplane-right"
          src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629386181/tiketing/left_yflfdd.png"
          alt=""
        />
      </div>
      <div className="register-layout px-5">
        <div className="register-logo fw-bold">
          <img
            src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629369063/vector_02_wqpjtu.png"
            alt=""
          />
          Ankasa
        </div>
        <div className="register d-flex flex-column">
          <h3 className="fw-bold">Register</h3>
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
            type="submit"
            onClick={handleSubmit}
            className="register-button-signup register-color"
          >
            Sign Up
          </button>
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