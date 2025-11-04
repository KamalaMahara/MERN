import React from "react";
import heroImg from "../assets/NotesLekh.png";

function Hero() {
  return (
    <div className="bg-[#ECF4E8] px-2 sm:px-4 pt-8 pb-4 md:pt-12 md:pb-24 min-h-7xl w-full">
      <div className="max-w-7xl mx-20 my-4 grid grid-cols-1 md:grid-cols-2  items-center">
        {/* Right Section (Logo First on Mobile) */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <div>
            <button className="bg-amber-200 rounded-full size-4"></button>
            <button className="bg-blue-300 rounded-full size-4"></button>
            <button className="bg-amber-200 rounded-full size-4"></button>
            <button className="bg-amber-200 rounded-full size-4"></button>
            <img
              src={heroImg}
              alt="NotesLekh Banner"
              className="max-w-scren-full h-7xl drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
            />
          </div>
        </div>

        {/* Left Section (Text Second on Mobile) */}
        <div className="order-2 md:order-1 p-4 sm:p-">
          <div className="rounded-full bg-[#adeaed] w-fit px-4 py-2 mt-4 font-bold text-[#276266]  text-center text-sm sm:text-base">
            ✨Welcome to the future of note-taking.
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mt-6">
            <span className="bg-[#0a1e5e] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
              Welcome to{" "}
            </span>
            <span className="bg-gradient-to-r from-[#0a1e5e] via-[#0cdcdc] to-[#e0c320c0] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
              NotesLekh
            </span>
          </h1>

          <p className="text-[#0a1e5e] font-semibold text-xl mt-4">
            Where good ideas don't get lost.
          </p>
          <p className="text-[#3b3e42] text-lg mt-4">
            NotesLekh helps you capture, organize, and share your thoughts
            seamlessly. Start writing today and keep your creativity flowing.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-[#59E7F2] rounded-xl px-6 py-3 font-semibold text-[#0a1e5e] flex items-center">
              Start Writing Now <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
            <button className="hover:bg-[#E49A3A] rounded-xl px-6 py-3 font-semibold text-[#0a1e5e] flex items-center">
              <i className="fa-solid fa-play mr-2"></i> Watch Demo
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm sm:text-base">
            <p className="flex items-center">
              <span className="rounded-full h-2 w-2 bg-amber-300 mr-2"></span>
              Free to start
            </p>
            <p className="flex items-center">
              <span className="rounded-full h-2 w-2 bg-[#59E7F2] mr-2"></span>
              No credit card required
            </p>
            <p className="flex items-center">
              <span className="rounded-full h-2 w-2 bg-[#0a1e5e] mr-2"></span>
              Sync across devices
            </p>
          </div>
        </div>
      </div>
      <div className=" min-h-24 mt-10 flex justify-center items-center ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="none"
            stroke="#59E7F2"
            strokeWidth="20"
            className="w-14 h-14 animate-bounce"
          >
            <path d="M224 0H160C71.6 0 0 71.6 0 160v192c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V160C384 71.6 312.4 0 224 0zM192 32c35.3 0 64 28.7 64 64v64h-64V32zm160 320c0 70.7-57.3 128-128 128h-64C89.3 480 32 422.7 32 352V160C32 89.3 89.3 32 160 32h32v128h160v192z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;
