import React from "react";

export default function ErrorPage() {
  return (
    <div className="m-auto min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-900">
        <svg
          className="w-8 h-8"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.018 1.55288L1.15392 9.67308C1.05363 9.84675 1.00057 10.0437 1 10.2442C0.999443 10.4447 1.0514 10.6419 1.15071 10.8162C1.25003 10.9904 1.39323 11.1356 1.56607 11.2373C1.73892 11.339 1.93538 11.3937 2.13592 11.3959H11.8641C12.0646 11.3937 12.2611 11.339 12.4339 11.2373C12.6068 11.1356 12.75 10.9904 12.8493 10.8162C12.9486 10.6419 13.0006 10.4447 13 10.2442C12.9994 10.0437 12.9464 9.84675 12.8461 9.67308L7.982 1.55288C7.87963 1.3841 7.73548 1.24456 7.56347 1.14772C7.39146 1.05088 7.1974 1 7 1C6.8026 1 6.60854 1.05088 6.43653 1.14772C6.26452 1.24456 6.12037 1.3841 6.018 1.55288V1.55288Z"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7 4.50463V6.80172"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7 9.0988H7.00663"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <h1 className="text-sm font-semibold">Unable to login</h1>
    </div>
  );
}
