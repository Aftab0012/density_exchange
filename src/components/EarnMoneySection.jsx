import { FLEX } from '../globalStyles/NavbarStyles';

function EarnMoneySection() {
  return (
    <>
      <FLEX className="min-h-screen bg-[#010101] pt-20 pb-20">
        <div>
          <img src="../../public/bhopu.png" />
        </div>
        <div className="text-3xl font-bold text-center text-white sm:flex-wrap sm:text-5xl">
          Earn Money,
          <span className="font-bold text-[#ebff25]"> The Easy Way.</span>
        </div>
        <p className="font-light text-center text-white">
          No Complexity of Trading Fee, generate volume and win
        </p>

        <div className="flex flex-col items-center justify-center object-contain gap-10 sm:flex-wrap sm:px-10 sm:flex-row">
          <img src="../../public/goldbars.png" />
          <img src="../../public/goldusers.png" />
          <img src="../../public/goldCoins.png" />
        </div>
      </FLEX>
    </>
  );
}

export default EarnMoneySection;
