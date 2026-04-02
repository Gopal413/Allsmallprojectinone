import React, { useState } from "react";
import "../MainReview/index.css"

function MainReview() {
  const review = [
    { id: 1, url: "https://www.shutterstock.com/image-photo/40s-mid-age-european-business-600w-2343004281.jpg", name: "Nikhita", rank: "Excellet", para: "All Rounder" },
    { id: 2, url: "https://www.shutterstock.com/image-photo/young-adult-man-glasses-works-600w-2611319043.jpg", name: "Mukesh", rank: "Good", para: "Javascript" },
    { id: 3, url: "https://www.shutterstock.com/image-photo/portrait-smiling-woman-manager-working-600w-2272550999.jpg", name: "Pooja", rank: "Very Good", para: "React" },
    { id: 4, url: "https://www.shutterstock.com/image-photo/smiling-successful-female-professional-executive-600w-2531612197.jpg", name: "Nitiya", rank: "Bad", para: "Html" },
  ];

  const [currentvalue, setCurrentvalue] = useState(0);

  const rightfun = () => {
    setCurrentvalue((pre) => (pre === review.length - 1 ? 0 : pre + 1));
  };
  const leftfun = () => {
    setCurrentvalue((pre) => (pre === 0 ? review.length - 1 : pre - 1));
  };

  return (
    <div>
      <div className="review">
        <h1>Reviews</h1>
       
          <div>
            <img src={review[currentvalue].url} alt="not found" />
            <h4>{review[currentvalue].name}</h4>
            <p>{review[currentvalue].rank}</p>
            <p>{review[currentvalue].para}</p>
            <span className="right" onClick={rightfun}>➡</span>
            <span className="left" onClick={leftfun}>⬅</span>
          </div>
        </div>
      
    </div>
  );
}

export default MainReview;
