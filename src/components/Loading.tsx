import React from "react";

export default function Loading() {
  return (
    <div className="m-auto min-h-screen flex flex-col items-center justify-center">
      <img src="loading.gif" width={40} height={40} alt="Loading" />
      <h1 className="text-sm">
        Loading, <span className="font-semibold">Please wait...</span>
      </h1>
    </div>
  );
}
