import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!fullName) tempErrors.fullName = "Zəhmət olmasa adınızı daxil edin";
    if (!email) tempErrors.email = "Zəhmət olmasa email daxil edin";
    if (!password) tempErrors.password = "Zəhmət olmasa şifrə daxil edin";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
    }
  };

  const handleDivClick = () => {
    setIsClicked(!isClicked);
  };

  const handleSpanClick = () => {
    navigate("/other-page");
  };

  return (
    <div className="loginRoot">
      <div className="loginRootRight">
        <div className="loginRootRightCgild">
          <img src="/resim1.png" alt="resim1" />
          <h5>Insurance</h5>
        </div>
        <div className="loginRootRightCgildParent">
          <h2>Create an account to continue</h2>
          <div className="loginParentDiv">
            <h6>
              It’s free to create an account and get your event live. Already
              have an account? <span onClick={handleSpanClick}>Log in</span>
            </h6>
          </div>
        </div>
        <div className="loginRootRightForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              placeholder="e.g San Andreas"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && (
              <span className="error">{errors.fullName}</span>
            )}

            <label htmlFor="email">Email address</label>
            <input
              type="text"
              id="email"
              placeholder="e.g sanandreas@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <label htmlFor="password">Create a Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
            <div
              className={`loginRightText ${isClicked ? "clicked" : ""}`}
              onClick={handleDivClick}
            >
              <div className={`loginRightCrl ${isClicked ? "active" : ""}`}>
              <img src="/resim37.png" alt="resim37" />
              </div>
              <h4>
                Confirm that you accept our Terms of use and Privacy Policy
              </h4>
            </div>
            <button type="submit" className="loginRightBtn">
              Sign Up
            </button>
          </form>
        </div>

        <div className="loginRightBorder">
          <div className="loginRightBorderChild"></div>
          <h6>Or Sign Up with</h6>
          <div className="loginRightBorderChild"></div>
        </div>
        <div className="loginRightFoot">
          <div className="loginRightFootImg">
            <img src="/resim35.png" alt="resim35" />
            <h6>Google</h6>
          </div>

          <div className="loginRightFootImg">
            <img src="/resim36.png" alt="resim36" />
            <h6>Facebook</h6>
          </div>
        </div>
      </div>

      <div className="loginRootLeft">
        <img src="/resim34.png" alt="resim34" />
      </div>
    </div>
  );
}

export default Login;
