import React from 'react';

function Chart() {
  return (
    <div className="bg-[#010101] py-10 flex flex-col items-center px-1 pt-20 text-white">
      <div className="text-center">
        <p className="text-3xl sm:text-5xl">Explore The Markets</p>
        <p className="pb-10 text-3xl sm:text-5xl">
          Like it is your <span className="text-[#ebff25]">Playground.</span>
        </p>
      </div>

      <div>
        <img src="../../public/Screenshot 2023-11-18 160432.png" />
      </div>

      <button className="mt-10 font-bold text-black w-52 glow-button">
        Explore Markets
      </button>
    </div>
  );
}

export default Chart;
