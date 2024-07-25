import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OtherPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
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

  const handleSignUpClick = () => {
    navigate("/login");
  };

  return (
    <div className="otherPageRoot">
      <div className="otherPageRootRight">
        <div className="otherPageRootRightLogo">
          <img src="/resim1.png" alt="resim1" />
          <h4>Insurance</h4>
        </div>

        <div className="otherPageRootRightContent">
          <h3>Good to see you again 👋</h3>
        </div>

        <div className="otherPageRootRightFooter">
          <h5>Don’t have an account? </h5>
          <span
            onClick={handleSignUpClick}
            style={{ cursor: "pointer", color: "#6ADAB3" }}
          >
            Sign Up
          </span>
        </div>

        <div className="otherPageRootRightForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
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
              placeholder="Must be at least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}

            <button type="submit" className="otherPageRootRightBtn">
              Log In
            </button>
          </form>
        </div>
        <div className="otherPageRootRightCrl">
          <div className="otherPageRightCrlChild">
            <img src="/resim37.png" alt="resim37" />
          </div>
          <h5>Confirm that you accept our Terms of use and Privacy Policy</h5>
        </div>
        <div className="otherPgeRootBorder">
          <div className="otherPgeRootBorderChild"></div>
          <h6>Or Log In with</h6>
          <div className="otherPgeRootBorderChild"></div>
        </div>
        <div className="otherPageRootRightEnd">
          <div className="end">
            <img src="/resim35.png" alt="resim35" />
            <h5>Google</h5>
          </div>

          <div className="end">
            <img src="/resim36.png" alt="resim36" />
            <h5>Facebook</h5>
          </div>
        </div>
      </div>
      <div className="otherPageRootLeft">
        <img src="/resim34.png" alt="resim34" />
      </div>
    </div>
  );
}

export default OtherPage;
