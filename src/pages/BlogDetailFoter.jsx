import React from "react";
import BlogDetailFooterEnd from "./BlogDetailFooterEnd";

export default function () {
  return (
    <div className="BlogDetailFoter">
      <h1>Related Posts</h1>
      <div className="roedetal">
        <div className="rowDetal">
          <img src="/532711a31915aimg.jpeg" alt="degree" />
          <h3>The rise of the gig economy and its impact on insurance</h3>
          <ul id="row-ul">
            <li>Sep 31 , 2023</li>
            <li>Erin Bator</li>
          </ul>
        </div>


        <div className="rowDetal">
          <img src="8518b135bd718eimg2.jpeg" alt="degree" />
          <h3>The changing demographics of the population and its impact on insurance</h3>
          <ul id="row-ul">
            <li>Sep 31 , 2023</li>
            <li>Wilson Septimus</li>
          </ul>
        </div>

        <div className="rowDetal">
          <img src="/16197d2cd3f989dbimg3.jpeg" alt="degree" />
          <h3>The increasing cost of healthcare and its impact on insurance</h3>
          <ul id="row-ul">
            <li>Sep 31 , 2023</li>
            <li>Tiana Westervelt</li>
          </ul>
        </div>
        
      </div>
      {/* <div className="foter"></div> */}
      <BlogDetailFooterEnd />
    </div>
  );
}
