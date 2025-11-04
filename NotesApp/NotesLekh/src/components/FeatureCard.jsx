import React from "react";

function FeatureCard(props) {
  return (
    <div className="h-[250px] w-[380px] border-2 rounded-3xl shadow shadow-gray-500 p-4 flex flex-col justify-start items-center gap-2">
      <div className="flex flex-row justify-start items-center gap-4 w-full">
        <button className="h-[72px] w-[72px] bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-xl rounded-2xl border border-purple-500 flex justify-center items-center">
          {props.icon}
        </button>
        <span className="font-bold text-2xl">{props.feature}</span>
      </div>
      <div className="w-full mt-2 font-semibold text-center text-gray-700 text-base ">
        <p>{props.slogan}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
