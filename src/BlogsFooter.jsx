import React from 'react'

export default function BlogsFooter() {
  return (
    <div className='BlogsFooter'>
        <div className='JobDetailFooter'>
    {" "}
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
    </div>
  )
}
