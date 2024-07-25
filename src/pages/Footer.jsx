import React from "react";

const customerReviews = [
  {
    id: 1,
    imgSrc: "/resim22.png",
    altText: "resim22",
    title:
      "I was so grateful to have insurance when my car was totaled in an accident.",
    content:
      "The insurance company handled everything quickly and efficiently, and I was able to get a new car without having to worry about the cost.",
    ratingImgSrc: "/resim23.png",
    ratingAltText: "resim23",
    rating: "5.0",
    avatarSrc: "/resim24.jpeg",
    avatarAltText: "resim24",
    authorName: "Skylar Siphron",
    authorTitle: "Behance",
  },
  {
    id: 2,
    imgSrc: "/resim22.png",
    altText: "resim22",
    title:
      "I was so impressed with the customer service I received when I filed a claim for my home insurance.",
    content:
      "The agent was very helpful and understanding, and I felt like my claim was handled quickly.",
    ratingImgSrc: "/resim23.png",
    ratingAltText: "resim23",
    rating: "5.0",
    avatarSrc: "/resim25.jpeg",
    avatarAltText: "resim25",
    authorName: "Nolan Korsgaard",
    authorTitle: "Adobe",
  },
  {
    id: 3,
    imgSrc: "/resim22.png",
    altText: "resim22",
    title: "I had a medical emergency a few years ago, and I was so grateful.",
    content:
      "The insurance company covered all of my medical expenses, and I didn't have to worry about going bankrupt.",
    ratingImgSrc: "/resim23.png",
    ratingAltText: "resim23",
    rating: "5.0",
    avatarSrc: "/resim26.png",
    avatarAltText: "resim26",
    authorName: "Alfredo Philips",
    authorTitle: "Dribbble",
  },
];

function Footer() {
  return (
    <div className="Footer">
      <h1>What our customers say about us.</h1>

      <div className="footerTop">
        {customerReviews.map((review) => (
          <div key={review.id} className="footerBootom">
            <div className="footerimg">
              <img src={review.imgSrc} alt={review.altText} />
            </div>
            <h3>{review.title}</h3>
            <h5>{review.content}</h5>
            <div className="footerParent">
              <img src={review.ratingImgSrc} alt={review.ratingAltText} />
              <span>{review.rating}</span>
            </div>
            <div className="footerparetBootom">
              <img src={review.avatarSrc} alt={review.avatarAltText} />
              <div className="foot">
                <h3>{review.authorName}</h3>
                <h5>{review.authorTitle}</h5>
              </div>
            </div>
          </div>
        ))}

        
      </div>

     
    </div>
    
  );
}

export default Footer;
