import React from "react";

function Card1(props) {
  return (
    <div className="container h-[290px] w-[270px]  border-[0.5] border-blue-300 shadow shadow-blue-600 bg-[#F5FDFD] text-center space-y-4 p-4 rounded-2xl hover:scale-105 transition-all duration-300">
      <div className="Container  flex flex-col justify-center items-center gap-4 ">
        <div className="h-16 w-16 bg-[#aecef4] rounded-full  flex flex-col justify-center items-center">
          {props.iconName}
        </div>
        <div className="font-bold text-4xl text-[#0a1e5e]">{props.Number}</div>
      </div>
      <div className="font-medium text-2xl">{props.Slogan}</div>
      <div>
        <p className="text-lg text-gray-600">{props.Quote}</p>
      </div>
    </div>
  );
}

export default Card1;
