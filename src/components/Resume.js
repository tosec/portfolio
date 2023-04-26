import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full lg:w-full xl:full h-full relative">
        <iframe
          title="resume"
          className="w-full h-full"
          src={require("../docs/resume.pdf")}
        />
        <button
          className="absolute top-1/2 left-0 mb-4 ml-4 bg-white rounded-full p-3 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="text-gray-800" />
        </button>
      </div>
    </div>
  );
}
