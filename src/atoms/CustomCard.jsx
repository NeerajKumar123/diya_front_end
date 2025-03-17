import React, { useEffect, useState } from "react";

const WallClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative w-40 h-40 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-md">
        {/* Hour Hand */}
        <div
          className="absolute w-1 h-10 bg-black origin-bottom left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2"
          style={{ transform: `rotate(${time.getHours() % 12 * 30 + time.getMinutes() * 0.5}deg) translateY(-50%)` }}
        ></div>
        {/* Minute Hand */}
        <div
          className="absolute w-1 h-14 bg-gray-700 origin-bottom left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2"
          style={{ transform: `rotate(${time.getMinutes() * 6}deg) translateY(-50%)` }}
        ></div>
        {/* Second Hand */}
        <div
          className="absolute w-1 h-16 bg-red-500 origin-bottom left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2"
          style={{ transform: `rotate(${time.getSeconds() * 6}deg) translateY(-50%)` }}
        ></div>
        {/* Clock Center */}
        <div className="w-4 h-4 bg-black rounded-full absolute"></div>
      </div>
      <div className="mt-4 text-2xl font-semibold text-gray-800">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default WallClock;
