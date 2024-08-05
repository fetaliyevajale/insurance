import React from "react";
import CreersMain from "./CreersMain";
import CareersFooter from "./CareersFooter";
export default function Careers() {
  return (
    <div className="careers">
      <div className="careerschild">
        <button id="hedbtn">Careers</button>
        <h1 id="hedh1">Want to join us on this mission?</h1>
      </div>

      <div className="careersMap">
        <div id="careersMap1">
          <div className="careerstable">
            <h2>Sr. Software Engineer</h2>

            <div id="careersdivparent">
              <div id="careersdiv">
                <img src="/profile-2user.png" alt="profile-2user" />
                <h3>1-3 Year</h3>
              </div>

              <div id="careersdiv">
                <img src="/timer.png" alt="profile-2user" />
                <h3>1-3 Year</h3>
              </div>

              <div id="careersdiv">
                <img src="/location.png" alt="profile-2user" />
                <h3>1-3 Year</h3>
              </div>
            </div>
            <h4 id="h4">
              We are seeking a passionate and skilled Ruby on Rails, backend
              engineer to join our dynamic team at ConvertKit. You'll play a
              crucial role in crafting and maintaining ConvertKit's core
              application logic. From email marketing to visual automation and
              API products, you'll have the opportunity to contribute to the
              development of some of our most challenging platform aspects.
            </h4>

            <ul className="careersMain">
            <li>Frond-end</li>
            <li>Developer</li>
            <li>Programming</li>
            </ul>

            <div className="careersul">
             <h5 >$620K</h5>
             <h6>/Years</h6>
            </div>
          </div>
        </div>


        <div id="careersMap1">
          <div className="careerstable">
            <h2>Sr. Software Engineer</h2>

            <div id="careersdivparent">
              <div id="careersdiv">
                <img src="/profile-2user.png" alt="profile-2user" />
                <h3>1-3 Year</h3>
              </div>

              <div id="careersdiv">
                <img src="/timer.png" alt="profile-2user" />
                <h3>1-3 Year</h3>
              </div>

              <div id="careersdiv">
                <img src="/location.png" alt="profile-2user" />
                <h3>1-3 Year</h3>
              </div>
            </div>
            <h4 id="h4">
              We are seeking a passionate and skilled Ruby on Rails, backend
              engineer to join our dynamic team at ConvertKit. You'll play a
              crucial role in crafting and maintaining ConvertKit's core
              application logic. From email marketing to visual automation and
              API products, you'll have the opportunity to contribute to the
              development of some of our most challenging platform aspects.
            </h4>

            <ul className="careersMain">
            <li>Frond-end</li>
            <li>Developer</li>
            <li>Programming</li>
            </ul>

            <div className="careersul">
             <h5 >$620K</h5>
             <h6>/Years</h6>
            </div>
          </div>
        </div>

        <div id="careersMap1">
          <div className="careerstable"></div>
        </div>
      </div>
      <CreersMain />
      <CareersFooter />
    </div>
  );
}
