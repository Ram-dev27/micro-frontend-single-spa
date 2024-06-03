import React from "react";
import ReactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

const CardReact = () => {
  return (
    <div className=" max-w-lg mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl pt-6">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={ReactLogo}
            alt="React Logo"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Welcome to React Application
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            This page is built in React framework
          </h2>
          <p className="mt-2 text-gray-500">
            This page, built using React and Single SPA, leverages React's
            component-based architecture for UI development and Single SPA's
            microfrontend framework{" "}
          </p>
          <Link to={"/react/recipe"} className="text-indigo-500 font-semibold">View react recipe application</Link>
        </div>
      </div>
    </div>
  );
};

export default CardReact;
