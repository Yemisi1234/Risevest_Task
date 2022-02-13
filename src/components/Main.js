import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="main_container">
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#A0DDE2" />
        </svg>
        <h1 className="header_investment">
          Dollar investments that help you grow
        </h1>
        <p className="header_p">
          We put your money in high quality assets that help you build wealth
          and achieve your financial goals.
        </p>
        <div className="ads_container">
          <div className="ads">
            <i>
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5554 2.55192C19.3269 1.01143 17.6004 0.117432 15.9699 0.117432C13.8174 0.117432 12.9069 1.14793 11.4114 1.14793C9.86942 1.14793 8.69792 0.120432 6.83643 0.120432C5.00794 0.120432 3.06095 1.23792 1.82646 3.14891C0.0909721 5.8399 0.38797 10.8994 3.20045 15.2088C4.20695 16.7508 5.55094 18.4848 7.30893 18.4998C8.87342 18.5148 9.31442 17.4963 11.4339 17.4858C13.5534 17.4738 13.9554 18.5133 15.5169 18.4968C17.2764 18.4833 18.6939 16.5618 19.7004 15.0198C20.4219 13.9144 20.6904 13.3579 21.2498 12.1099C17.1804 10.5604 16.5279 4.7734 20.5554 2.55192Z"
                  fill="white"
                />
              </svg>
            </i>
            <p style={{ fontSize: "10px" }}>
              Download on the{" "}
              <span style={{ fontSize: "17px" }}>App Store</span>
            </p>
          </div>
          <div className="ads">
            <i>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_1191)">
                  <path
                    d="M4.66964 0.877687C4.12289 0.52439 3.46617 0.417609 2.85019 0.563015L13.6751 11.388L17.1835 7.87959L4.66964 0.877687Z"
                    fill="white"
                  />
                  <path
                    d="M1.50666 1.44287C1.20474 1.84426 1.03098 2.33711 1.03098 2.85845V22.1409C1.03098 22.6622 1.20479 23.155 1.50666 23.5564L12.5634 12.4997L1.50666 1.44287Z"
                    fill="white"
                  />
                  <path
                    d="M21.7622 10.4415L18.6091 8.67725L14.7867 12.4996L18.6093 16.3222L21.7627 14.5578C22.5182 14.1345 22.9692 13.3652 22.9692 12.4996C22.9692 11.634 22.5182 10.8648 21.7622 10.4415Z"
                    fill="white"
                  />
                  <path
                    d="M13.675 13.6116L2.85074 24.4359C3.02821 24.4776 3.20882 24.5001 3.38943 24.5001C3.83577 24.5001 4.28057 24.3732 4.66958 24.1218L17.1836 17.12L13.675 13.6116Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1191">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </i>
            <p style={{ fontSize: "10px" }}>
              Download on the{" "}
              <span style={{ fontSize: "17px" }}>App Store</span>
            </p>
          </div>
        </div>
      </div>
      <div>
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
      <div>
        <img
          src="https://risevest.com/_next/static/images/rise-app-phone-67fd09b34e7b43e8d0864948fc24a714.png"
          alt="card"
          className="image_card"
        />
       </div>
    </div>
  );
}
