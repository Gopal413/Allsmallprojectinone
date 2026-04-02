import React, { useState } from "react";
import "../ChoiceImage/index.css";
function ChooseImage() {
  const images = [
    "./Images/Mountain.png",
    "./Images/Rivers.png",
    "./Images/Trees.png",
    "./Images/image.png",
  ];

  const [Choose, setchoose] = useState();

  const choosefun = (val) => {
    setchoose(val);
  };
  return (
    <div className="main">
      <div className="choose">
        <img className="outerimage" src={Choose||images[0]} alt="not found" />
        <h2>Nature Photography</h2>
        <div>
          {images.map((value) => (
            <img
              className="box-image"
              onClick={() => choosefun(value)}
              src={value}
              alt="not found"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseImage;
