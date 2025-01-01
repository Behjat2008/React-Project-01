import React from "react";
import Navigation from "./components/navigation";
import "./App.css"; 
import "./index.css"; 
import HeroSection from "./components/hero";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
