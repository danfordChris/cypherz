import React from "react";
import Navbar from "./Navbar";
import maize from "../assets/maize.png";

function About() {
  return (
    <div className="max-h-screen">
    
      <h1 className="flex justify-center text-3xl font-mono font-bold text-green-800">
        About us
      </h1>
      <section className="rounded-md text-center md:text-left p-0">
        <div className="flex justify-center">
          <div className="">
            <div className="m-4 block rounded-lg p-0 h-full dark:bg-green-700">
              <div className="md:flex md:flex-row h-full">
                <div className="mx-auto mb-6 flex w-1/2 h-full items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                  <img
                    src={maize}
                    className="dark:bg-white w-full h-full object-cover rounded-l-lg"
                    alt="maize"
                  />
                </div>
                <div className="md:ml-6 w-1/2 p-6 h-full">
                  <p className="mb-6 p-3 font-light text-neutral-500 dark:text-neutral-300 h-full">
                    We are building a modern distribution platform that connects
                    farmers, consumers, businesses and informal retailers in a
                    marketplace for selling and buying fresh produce leveraging
                    on mobile technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
