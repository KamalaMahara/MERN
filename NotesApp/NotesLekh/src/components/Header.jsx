import React from "react";

const header = () => {
  return (
    <div className="container min-w-full flex justify-between items-center text-blue-950 h-[70px] font-semibold  text-lg m-0 p-0 shadow-md bg-[#D3F5F5]  fixed z-40 ">
      <div className="left-nav mx-9">
        <div className="text-3xl font-bold mx-12">
          <span className="text-[#080D5E]">Notes</span>
          <span className="text-[#10b7c3]">Lekh</span>
        </div>
      </div>
      <div className="right-nav flex justify-between gap-14 flex-nowrap min-w-max m-12 items-center">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">How it Works</a>
        <a href="#">My Notes</a>
        <a href="#">Sign In </a>
        <div className="rounded-full bg-[#56E7F1] min-h-10 min-w-[120px] flex justify-center items-center  ">
          Start Writing
        </div>
      </div>
    </div>
  );
};

export default header;
