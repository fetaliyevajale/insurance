import React from "react";

const articles = [
  {
    imgSrc: "/resim18.jpeg",
    title: "The rise of the gig economy and its impact on insurance",
    date: "Sep 31, 2023",
    author: "Erin Bator",
  },
  {
    imgSrc: "/resim19.jpeg",
    title: "The changing demographics of the population and its impact on insurance",
    date: "Sep 31, 2023",
    author: "Wilson Septimus",
  },
  {
    imgSrc: "/resim20.jpeg",
    title: "The increasing cost of healthcare and its impact on insurance",
    date: "Sep 31, 2023",
    author: "Tiana Westervelt",
  },
];

function Content() {
  return (
    <div>
      <div className="rotContent">
        <div className="content">
          <h3>Latest article</h3>
          <button className="btnContent">Discover More</button>
        </div>

        <div id="hDiv">
          {articles.map((article, index) => (
            <div className="sekilcontent" key={index}>
              <img src={article.imgSrc} alt={`image${index + 1}`} />
              <div className="sekilcontentDiv">
                <h3>{article.title}</h3>
                <div className="rootDiv">
                  <div id="parentdiv1">{article.date}</div>
                  <div id="parentdiv2">{article.author}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
