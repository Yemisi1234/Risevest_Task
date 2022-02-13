import React, { useState } from "react";
import "../App.css";
import logo from "../../src/logo.svg";
import "../components/Header.css";
import { MenuItems } from "./MenuItems";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <div className="container_header">
        <img src={logo} className="nav-logo" alt="logo" />
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className={item.lName}>
                <a className={item.cName} href={item.url}>
                  {item.title === "Products" ? (
                    <span>
                      {" "}
                      {item.title} {" "}
                      <svg
                        width="10"
                        height="12"
                        viewBox="0 0 10 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 0C4.724 0 4.5 0.224 4.5 0.5V10.4747L0.861999 6.65525C0.671749 6.4555 0.355499 6.44725 0.154999 6.638C-0.0450011 6.8285 -0.0527511 7.14475 0.137749 7.34475L4.29275 11.707C4.48175 11.896 4.73275 12 5 12C5.267 12 5.51825 11.896 5.7155 11.6982L9.862 7.34475C10.0525 7.14475 10.0445 6.8285 9.84475 6.638C9.645 6.44725 9.3285 6.45525 9.138 6.65525L5.5 10.4908V0.5C5.5 0.224 5.276 0 5 0Z"
                          fill="#07969E"
                        />
                      </svg>
                    </span>
                  ) : (
                    item.title
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        <div
          className="hamburger"
          onClick={() => setClicked((prevState) => !prevState)}
        >
          <div className={clicked ? "X" : "bar"}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      
      </div>
    </div>
  );
}
