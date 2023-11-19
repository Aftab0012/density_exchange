import React from 'react';
import { FLEX } from '../globalStyles/NavbarStyles';

function CreateAccountSteps() {
  return (
    <FLEX className="bg-[#010101] p-10">
      <div className="pt-10 text-center text-white pb-7 sm:pb-20">
        <p className="text-2xl sm:text-5xl">
          Derivates made simple <br /> in
          <span className="text-[#bef900]"> 3 Easy</span> Steps
        </p>
      </div>

      <div className="flex flex-col-reverse items-center justify-center sm:gap-20 sm:flex-row">
        <div>
          <img
            className="sm:w-[258px] h-[538px] sm:ml-4"
            src="../../public/iPhone 14 Pro Space Black Mockup label.png"
          />
        </div>
        <div className="pb-10">
          <img src="../../public/Frame 3463909.png" />
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-center sm:gap-20 sm:py-20 sm:flex-row">
        <div>
          <img
            className="sm:w-[258px]"
            src="../../public/iPhone 14 Pro left.png"
          />
        </div>
        <div>
          <img className="pb-10 mt-10" src="../../public/Frame 3463910.png" />
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-center sm:gap-20 sn:py-20 sm:flex-row">
        <div>
          <img
            className="sm:w-[258px]"
            src="../../public/iPhone 14 Pro right.png"
          />
        </div>
        <div>
          <img className="mt-10 mb-10 " src="../../public/Frame 3463911.png" />
        </div>
      </div>
    </FLEX>
  );
}

export default CreateAccountSteps;
