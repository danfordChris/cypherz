import React from "react";
import backgroundImage from '../assets/bg1.png';

function LandingPage() {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 text-center text-slate-200">
          <h1 className="text-2xl md:text-3xl font-mono text-lime-50/100 mb-6 font-black">
            You reach us, we reach your needs!
          </h1>
          <button
            type="button"
            className="text-white bg-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-green-900 dark:hover:bg-green-800 dark:focus:bg-green-800"
          >
            Learn more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
