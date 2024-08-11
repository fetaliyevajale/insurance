import React from "react";
import { useNavigate } from 'react-router-dom';

function FooterFoot() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="FooterFoot">
      <div className="FooterFootHeader">
        <h2>Talk to an insurance agent today</h2>
        <h4>
          Learn more about the different types of insurance and to get a quote
          for your specific needs.
        </h4>
        <button className="footbtn" onClick={() => handleNavigate('/get-started')}>Get Started</button>
      </div>

      <div className="FooterFootParent">
        <div className="FooterFootParentRght">
          <div className="FooterFootChild">
            <img src="/resim1.png" alt="Insurance" />
            <h4>Insurance</h4>
          </div>
          <h3>
            We work with you to customize a policy that fits your budget and
            your needs.
          </h3>
        </div>
        <div className="FooterFootLinks">
          <div>Services</div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div onClick={() => handleNavigate('/careers')}>Careers</div>
          <div onClick={() => handleNavigate('/job-detail')}>Job Detail</div>
          <div onClick={() => handleNavigate('/blogs')}>Blogs</div>
          <div onClick={() => handleNavigate('/blog-detail')}>Blog Detail</div>
        </div>

        <div className="FooterFootTerms">
          <div onClick={() => handleNavigate('/privacy-policy')}>Privacy Policy</div>
          <div onClick={() => handleNavigate('/terms-and-conditions')}>Terms & Conditions</div>
          <div onClick={() => handleNavigate('/faqs')}>FAQs</div>
        </div>

        <div className="FootBtn">
          <h4>Newsletter</h4>
          <div>Enter your email address</div>
          <div id="FootDiv"></div>
        </div>
        <button className="FootBtnChildBtn" onClick={() => handleNavigate('/submit-newsletter')}>Submit</button>
      </div>
      <div className="defaultFooter">
        <h6 id="footH6">© 2022 Company Name® Global Inc.</h6>
        <div id="footDivChild">
          <img src="/resim30.png" alt="social-icon" />
          <img src="/resim31.png" alt="social-icon" />
          <img src="/resim32.png" alt="social-icon" />
          <img src="/resim33.png" alt="social-icon" />
        </div>
        <div className="defaultFooterChild">
          <div onClick={() => handleNavigate('/terms-of-service')}>Terms of Service</div>
          <div onClick={() => handleNavigate('/privacy-policy')}>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default FooterFoot;
