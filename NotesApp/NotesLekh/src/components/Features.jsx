import React from "react";

// 1. Placeholder for the FeatureCard component (Must be in the same file)
const FeatureCard = ({ icon, feature, slogan }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 flex flex-col items-start space-y-3 h-full">
    {/* Inline SVG Icon */}
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-50 text-purple-600 text-2xl mb-2">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#0a1e5e]">{feature}</h3>
    <p className="text-gray-500 text-base">{slogan}</p>
  </div>
);

// Inline SVG Icons (Replacing Font Awesome)
const IconBolt = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    />
  </svg>
);

const IconShield = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.036A4.5 4.5 0 0 0 6.643 7.828 4.5 4.5 0 0 0 9.453 10.5H12a2.25 2.25 0 0 1 2.25 2.25v.75m-6-1.5V18a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25V9m-1.5-3.568A4.5 4.5 0 0 0 15.357 3.328 4.5 4.5 0 0 0 12.547 0H9.5a4.5 4.5 0 0 0-2.81 7.432Z"
    />
  </svg>
);

const IconMobile = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3.75 0V7.5m0-6V7.5m-3 0h3.75m-3.75 0h7.5M12 7.5h7.5m-7.5 0H12"
    />
  </svg>
);

const IconSearch = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

const IconLayerGroup = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6a7.5 7.5 0 0 0 7.5 7.5m-15 4.5a7.5 7.5 0 0 0 7.5 7.5h.75m-7.5-6h7.5m-9-1.5 6 6m12-9-6 6"
    />
  </svg>
);

const IconCloud = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM7.5 16.5l2.25 2.25m0 0 2.25-2.25M9.75 18.75 9 12l.75 6.75Zm7.5-6.75-2.25-2.25m0 0-2.25 2.25m4.5-4.5h.75m-4.5 0-2.25 2.25"
    />
  </svg>
);

// 2. The main component (formerly Features, now App for single-file export)
function App() {
  const features = [
    {
      icon: <IconBolt />,
      feature: "Lightning Fast",
      slogan:
        "Add notes instantly with our optimized interface. No lag, no delays, just pure productivity.",
    },
    {
      icon: <IconShield />,
      feature: "Secure & Private",
      slogan:
        "Your thoughts are yours. End-to-end encryption ensures your ideas stay private and secure.",
    },
    {
      icon: <IconMobile />,
      feature: "Cross-Platform",
      slogan:
        "Access your notes anywhere, anytime. Seamless sync across all your devices.",
    },
    {
      icon: <IconSearch />,
      feature: "Smart Search",
      slogan:
        "Find any note instantly with our powerful search that understands context and keywords.",
    },
    {
      icon: <IconLayerGroup />,
      feature: "Smart Organization",
      slogan:
        "Auto-categorization and intelligent tagging helps you organize notes effortlessly",
    },
    {
      icon: <IconCloud />,
      feature: "Cloud Sync",
      slogan:
        "Never lose your notes. Automatic cloud backup ensures your ideas are always safe.",
    },
  ];

  return (
    // Outer container: padding adjusted for responsiveness
    <div className="w-full bg-[#F6FEFF] pt-16 pb-20 md:p-16 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col justify-start items-center gap-4 p-2 mb-10 text-center">
          <div className="inline-flex items-center p-2 rounded-full bg-blue-100 text-sky-600 border border-blue-400">
            <IconBolt className="text-xl mr-2" />
            <span className="font-semibold text-base md:text-xl">
              Powerful Features
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0a1e5e] max-w-4xl leading-tight">
            Everything you need to organize your thoughts
          </h1>

          <p className="mt-5 text-lg md:text-xl font-medium text-gray-500 max-w-4xl">
            NotesLekh combines simplicity with powerful features to give you the
            ultimate note-taking experience. From quick jots to detailed
            documentation, we've got you covered.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-16 pb-20">
          {features.map((elem, idx) => (
            <FeatureCard
              key={idx}
              icon={elem.icon}
              feature={elem.feature}
              slogan={elem.slogan}
            />
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button className="bg-purple-600 text-white font-semibold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition ease-in duration-75 hover:bg-purple-700 min-w-[220px]">
            Try All Features Free
          </button>
          <button className="bg-white text-purple-600 border border-purple-600 font-semibold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition ease-in duration-75 hover:bg-purple-50 min-w-[200px]">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
