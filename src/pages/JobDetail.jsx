import React from "react";
import JobDetailFooter from "./JobDetailFooter";

export default function JobDetail() {
  return (
  <div>
      <div className="job-detail">
      <div id="jobDetailDiv1">
        <div className="job_detail_Text">
          <h2>About the company</h2>
          <h4>
            Consequat tempus lorem eget in eget nunc cursus. Sed tempor semper
            et tortor est. Consectetur risus consectetur congue quis at arcu
            malesuada aenean a. Ut sit a cursus quisque felis aliquet arcu mi.
            Interdum nulla dolor sit et eget. Faucibus vitae amet nisi gravida.
            Habitant amet sit ultrices ultricies augue. Morbi eget fermentum
            vitae ac duis pellentesque eu quis.
          </h4>
        </div>

        <div className="job_detail_Text">
          <h2>About the job</h2>
          <h5>
            Consectetur donec leo dignissim commodo. Nunc erat pharetra vitae
            gravida aenean. Gravida sed tempus id mi sed pulvinar. Nullam vitae
            elit neque feugiat est dolor blandit. Molestie diam molestie neque
            massa a neque. Sit amet quis ipsum non lorem volutpat purus. Posuere
            in orci duis molestie turpis ac risus. Pellentesque donec sapien
            tortor at et ut placerat.
          </h5>
        </div>

        <div className="job_detail_Text">
          <h2>Responsibilities Include:</h2>
          <ul id="job-detail-ul">
            <li>
              <img src="/degree.png" alt="degree" /> Sed tempor semper et tortor
              est.{" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" /> Consectetur risus
              consectetur congue quis at arcu malesuada aenean a.{" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" /> Ut sit a cursus quisque
              felis aliquet arcu mi.{" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" /> Interdum nulla dolor sit et
              eget.{" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" /> Faucibus vitae amet nisi
              gravida.{" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" /> Habitant amet sit ultrices
              ultricies augue.{" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" /> Morbi eget fermentum vitae
              ac duis pellentesque eu quis.{" "}
            </li>
          </ul>
        </div>


        <div className="job_detail_Text">
          <h2>Role Requirements</h2>
          <ul id="job-detail-ul">
            <li>
              <img src="/degree.png" alt="degree" /> Sed tempor semper et tortor est. {" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" /> Consectetur risus consectetur congue quis at arcu malesuada aenean a. {" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" />  Ut sit a cursus quisque felis aliquet arcu mi. {" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" />  Interdum nulla dolor sit et eget.  {" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" />  Faucibus vitae amet nisi gravida.  {" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" />  Habitant amet sit ultrices ultricies augue.  {" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" />  Morbi eget fermentum vitae ac duis pellentesque eu quis. {" "}
            </li>
          </ul>
        </div>

        
        <div className="job_detail_Text">
          <h2>Perks</h2>
          <ul id="job-detail-ul">
            <li>
              <img src="/degree.png" alt="degree" />Sed tempor semper et tortor est.  {" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" />Consectetur risus consectetur congue quis at arcu malesuada aenean a.  {" "}
            </li>
            <li>
              <img src="/degree.png" alt="degree" />  Ut sit a cursus quisque felis aliquet arcu mi. {" "}
            </li>
          </ul>
          <h6>Join our dynamic start-up and be part of a team that is reshaping the mobility landscape</h6>
        </div>
      </div>

      <div id="jobDetailDiv2">
        <h1>Sr. Software Engineer</h1>
        <ul id="jobDetailDiv2Ul">
          <li>  <img src="/Work.png" alt="Work" />$90,000/yr - $189,000/yr · Full-time · Mid-Senior level</li>
          <li>  <img id="jobdetailimg" src="/Work.png" alt="Work" />1-10 employees · Software Development</li>
        </ul>
        <button>Apply</button>
      </div>
    </div>
    <JobDetailFooter />
  </div>
  );
}
