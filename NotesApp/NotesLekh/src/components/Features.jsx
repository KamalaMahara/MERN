import React from "react";
import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      icon: <i className="fa-solid fa-bolt text-3xl text-purple-500"></i>,
      feature: "Lightning Fast",
      slogan:
        "Add notes instantly with our optimized interface. No lag, no delays, just pure productivity.",
    },
    {
      icon: <i class="fa-solid fa-shield text-purple-500"></i>,
      feature: "Secure & Private",
      slogan:
        "Your thoughts are yours. End-to-end encryption ensures your ideas stay private and secure.",
    },
    {
      icon: <i class="fa-solid fa-mobile-screen-button text-purple-500"></i>,
      feature: "Cross-Platform",
      slogan:
        "Access your notes anywhere, anytime. Seamless sync across all your devices.",
    },
    {
      icon: <i class="fa-solid fa-magnifying-glass text-purple-500"></i>,
      feature: "Smart Search",
      slogan:
        "Find any note instantly with our powerful search that understands context and keywords.",
    },
    {
      icon: <i class="fa-solid fa-layer-group text-purple-500"></i>,
      feature: "Smart Organization",
      slogan:
        "Auto-categorization and intelligent tagging helps you organize notes effortlessly",
    },
    {
      icon: <i class="fa-solid fa-cloud text-purple-500"></i>,
      feature: "Cloud Sync",
      slogan:
        "Never lose your notes. Automatic cloud backup ensures your ideas are always safe.",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-amber-200 p-16">
      <div className="min-h-screen w-full bg-amber-600">
        <div className=" min-w-full bg-amber-900 flex flex-col justify-start  items-center gap-2 p-2 ">
          <div className="rounded-full h-12 min-w-8 bg-blue-100 text-sky-500 border border-blue-400 flex justify-between items-center p-4">
            <i className="fa-solid fa-bolt  text-xl"></i>
            <span className="ml-2  font-semibold text-xl ">
              Powerful Features
            </span>
          </div>
          <div className="min-w-full  h-20 font-bold text-6xl text-[#0a1e5e] p-4  flex flex-col justify-end items-center text-center">
            <h1>Everything you need to organize your thoughts</h1>
          </div>
          <div className="text-center mt-5 text-xl font-medium mx-auto max-w-5xl  mb-10  ">
            <p className="text-gray-500 text-2xl mb-4 ">
              NotesLekh combines simplicity with powerful features to give you
              the ultimate note-taking experience. From quick jots to detailed
              documentation, we've got you covered.
            </p>
          </div>
        </div>
        <div className="min-w-full min-h-screen bg-red-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 md:gap-6 lg:gap-4 p-4 justify-items-center">
          {features.map((elem, idx) => (
            <FeatureCard
              key={idx}
              icon={elem.icon}
              feature={elem.feature}
              slogan={elem.slogan}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
