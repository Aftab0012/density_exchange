import React from 'react';
import { data } from '../constants';

function FeaturesSection() {
  return (
    <div className="min-h-screen pt-10 bg-[#010101]">
      <div className="flex flex-row items-center justify-center gap-8 px-10 py-10 text-center">
        <div className="text-white">
          <div className="font-bold text-yellow-500">00%</div>
          Conversion Fee
        </div>
        <div className="text-white">
          <div className="font-bold text-yellow-500">500 Mn+</div>
          Lifetime Volume Traded
        </div>
        <div className="text-white">
          <div className="font-bold text-yellow-500">250+</div>
          Total Tradable Pairs
        </div>
        <div className="text-white">
          <div className="font-bold text-yellow-500">15000+</div>
          Traders
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-20 pt-10 text-white">
        {data.map((item) => (
          <div
            className="border-[2px] flex flex-col justify-center rounded-3xl items-center  h-[569px] w-[278px]"
            key={item.description}
          >
            <img src={item.image} alt="logo" />
            <div className="pt-10 text-2xl font-medium text-center">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
