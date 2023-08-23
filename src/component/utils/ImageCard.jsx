import React, { useState } from "react";

const ImageCard = ({ imageUrl, Href, Href2, Title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`image-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageUrl}
        alt="Card"
        className={`card-image ${isHovered ? "blur" : ""}`}
      />
      <div className="titles pt-3 text-center ">
        <h5>{Title}</h5>
      </div>
      {isHovered && (
        <div className="buttons">
          <a href={Href} target="_blank" rel="noopener noreferrer">
            <button className="port-button">Visit</button>
          </a>
          <a href={Href2} target="_blank" rel="noopener noreferrer">
            <button className="port-button">Code</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
