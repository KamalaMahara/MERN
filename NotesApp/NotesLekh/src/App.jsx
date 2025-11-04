import React from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="min-h-6xl">
      <Header />
      <Hero />
      <Section1 />
      <Features />
    </div>
  );
};

export default App;
