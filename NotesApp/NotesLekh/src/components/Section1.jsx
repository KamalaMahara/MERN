import React from "react";
import Card1 from "./Card1";

const Section1 = () => {
  const user = [
    {
      icon: <i className="fa-solid fa-lightbulb text-[#0a1e5e] text-3xl"></i>,
      number: "99%",
      slogan: "Ideas Captured",
      explain: "Never lose another brilliant thought",
    },
    {
      icon: <i className="fa-solid fa-users text-[#0a1e5e] text-3xl"></i>,
      number: "50K+",
      slogan: "Active Users",
      explain: "Join the creative community",
    },
    {
      icon: <i className="fa-solid fa-clock text-[#0a1e5e] text-3xl"></i>,
      number: "24/7",
      slogan: "Always Available",
      explain: "Inspiration doesn't wait",
    },
    {
      icon: <i className="fa-solid fa-star text-[#0a1e5e] text-3xl"></i>,
      number: "4.9",
      slogan: "User Rating",
      explain: "Loved by creators worldwide",
    },
  ];

  return (
    <div className="min-h-screen min-w-full bg-[#e9f3ee]">
      {/* Header Section */}
      <div className="above flex flex-col justify-center items-center pt-12">
        <h1>
          <span className="font-bold text-5xl">Trusted by </span>
          <span className="font-bold text-5xl text-[#0adfee]">
            Creative Minds
          </span>
        </h1>
        <div className="text-center mt-5 text-xl font-sans mx-auto max-w-2xl">
          <p>
            Join thousands of creators, writers, and thinkers who trust
            NotesLekh to keep their ideas safe and organized.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="below grid sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-4 gap-4 mt-12 mx-24 p-6 ">
        {user.map((elem, idx) => (
          <Card1
            key={idx}
            iconName={elem.icon}
            Number={elem.number}
            Slogan={elem.slogan}
            Quote={elem.explain}
          />
        ))}
      </div>
    </div>
  );
};

export default Section1;
