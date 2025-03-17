import React from "react";

const HeroSection = (onJoinUsClicked) => {
    console.log("onJoinUsClicked",onJoinUsClicked)
  return (
    <div className="bg-amber-50 placeholder-red-50">
      {/* Background Image with Scrolling Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center animate-scroll bg-[url('https://yavuzceliker.github.io/sample-images/image-1.jpg')]"></div>

      {/* Static Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Diya Samajik Sanstha</h1>
        <p className="text-lg md:text-2xl mt-4 max-w-2xl">
        Helping Society to be skilled and self-dependent
        </p>
        <button  onClick={() => onJoinUsClicked()} className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
