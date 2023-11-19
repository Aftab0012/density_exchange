import { FLEX } from '../globalStyles/NavbarStyles';

function StartSmallEarnBig() {
  return (
    <FLEX className="w-auto pb-20">
      <p className="pt-10 text-3xl font-bold leading-5 sm:text-5xl">
        Start Small. Earn Big
      </p>
      <p className="pb-10 font-light leading-6 text-center line-clamp-2 pt-7">
        Deposity a minimum of 1000 and get a Deposit bonus + <br /> dedicagted
        relationship manager
      </p>
      <div className="flex px-5 flex-col items-center justify-center w-[250px] sm:w-auto pt-10 gap-5 sm:flex-row">
        <img src="../../public/bonus.png" />
        <img src="../../public/user.png" />
      </div>
    </FLEX>
  );
}

export default StartSmallEarnBig;
