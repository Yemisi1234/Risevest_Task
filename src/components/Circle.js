import React from "react";
import './Circle.css'

export default function Circle() {
  return (
    <>
    <div className="svg_container">
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="28" r="28" fill="#A0DDE2" />
      </svg>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#A0DDE2" />
      </svg>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="28" r="28" fill="#A0DDE2" />
      </svg>
    </div>
    <div className="banner_images">
    <img src="download.png" alt="banner" className="banner_image" />
     <img src="western.png" alt="banner" className="banner_image" />
     <img src="techstars.png" alt="banner" className="banner_image" />
     <img src="banner-icon.png" alt="banner" className="banner_image" />
    </div>
    


    </>
  );
}
