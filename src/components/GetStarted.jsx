import { FLEX, GRADIENTTEXT } from '../globalStyles/NavbarStyles';

function GetStarted() {
  return (
    <div className="flex flex-col justify-center w-auto min-h-screen gap-10 pt-20 pl-8 bg-black sm:flex-row">
      <GRADIENTTEXT className="hidden pt-20 text-2xl text-white sm:text-6xl sm:flex">
        Get Started <br /> Now
      </GRADIENTTEXT>

      <FLEX>
        <div>
          <img
            className="w-[122px] relative top-24 left-20"
            src="../../public/density.png"
          />
          <img src="../../public/Vector2.png" />
          <img
            className="relative w-40 top-[-400px] ml-16 "
            src="../../public/gold.png"
          />
          <button className="relative h-16 text-3xl font-bold text-black bottom-72 w-80 right-4 glow-button">
            Start Trading!
          </button>
        </div>
      </FLEX>
    </div>
  );
}

export default GetStarted;
