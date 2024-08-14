import React from "react";

export default function Contact() {
  return (
    <div className="contactMain">
      <div className="contactMainChild">
        <div className="contactMainChildText">
          <div className="h1Contact">
            <h1>We’d love to hear from you.</h1>
            <h4>
              If you have any questions about the subscription or you are not
              sure which plan is right for you, please contact our team.
            </h4>
          </div>

          <div className="h2Contact">
            <h5>Don’t like forms?</h5>
            <h6>Customer@Company.com</h6>
          </div>

          <div className="h3Contact">
            <h3>Social Media</h3>
            <ul id="h3ContactSosial">
              <li>
                {" "}
                <img src="/svg (1).jpg" alt="" />
              </li>
              <li>
                {" "}
                <img src="/svg (2).jpg" alt="" />
              </li>
              <li>
                {" "}
                <img src="/svg (3).jpg" alt="" />
              </li>
              <li>
                {" "}
                <img src="/svg (4).jpg" alt="" />
              </li>
              <li>
                {" "}
                <img src="/svg (5).jpg" alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className="contactRoot">
          <div className="contactF">
            <form action="">
              <label htmlFor="text">
                First Name <h2>*</h2>
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="First Name"
              />
            </form>

            <form action="">
              <label htmlFor="text">
                Last Name<h2>*</h2>
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Last Name"
              />
            </form>
          </div>

          <div className="contactR">
            <form action="" className="formLabel">
              <label htmlFor="email">
                Email <h2>*</h2>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </form>


            <form action="" className="formLabel">
              <label htmlFor="email">
              Your Message <h2>*</h2>
              </label>
              <input
                type="textare"
                name="textare"
                id="textare"
                placeholder="How we can help?"
              />
            </form>
          </div>
        </div>
      </div>
      <button className="contactbutton">Submit</button>

      <div className="foter"></div>

      <div className="FooterFootParent">
        <div className="FooterFootParentRght">
          <div className="FooterFootChild">
            <img src="/resim1.png" alt="resim1" />
            <h4>Insurance</h4>
          </div>
          <h3>
            We work with you to customize a policy that fits your budget and
            your needs.{" "}
          </h3>
        </div>
        <div id="childDiv">
          <div id="childDivChild">Navigate</div>
          <div>Services</div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Careers</div>
        </div>

        <div id="chilDivLeft">
          <div id="chilDivLeftparent">Link</div>
          <div>Privacy Policy</div>
          <div>Term & Conditioner</div>
          <div>FAQs</div>
        </div>

        <div className="FootBtn">
          <h4>Newsletter</h4>

          <div id="FootBtnChild">Enter your email address</div>
          <div id="FootDiv"></div>
        </div>
        <button className="FootBtnChildBtn">Submit</button>
      </div>
      <div className="defaultFooter">
        <h6 id="footH6">© 2022 Company Name® Global Inc.</h6>
        <div id="footDivChild">
          <img src="/resim30.png" alt="resim30" />
          <img src="/resim31.png" alt="resim31" />
          <img src="/resim32.png" alt="resim32" />
          <img src="/resim33.png" alt="resim33" />
        </div>
        <div className="defaultFooterChild">
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
        </div>
        
      </div>
      
    </div>
  );
}
