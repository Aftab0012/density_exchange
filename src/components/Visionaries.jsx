import { FLEX } from '../globalStyles/NavbarStyles';

function Visionaries() {
  return (
    <FLEX className="min-h-screen pb-20 text-white bg-[#19191d] pt-20">
      <div className="text-3xl font-bold text-center sm:text-5xl">
        Meet the <span className="font-bold text-[#ebff25]">Visionaries</span>{' '}
        <br /> behind Density.
      </div>

      <div className="flex flex-col items-center justify-center gap-5 sm:flex-wrap sm:flex-row">
        <div className="relative bg-[#27282e] w-[323px] h-[365px]">
          <div className="relative top-14 left-8">
            <p className="text-xl font-bold text-white opacity-80">
              Akash Neeraj <br /> Mittal
            </p>
            <p className="text-[#85858c] text-sm font-medium">CEO, Density</p>
          </div>

          <img
            className="absolute bottom-0 right-0"
            src="../../public/image 95.png"
          />
        </div>

        <div className="relative bg-[#27282e] w-[323px] h-[365px]">
          <div className="relative top-14 left-8">
            <p className="text-xl font-bold text-white opacity-80">
              Bhupendra Bule
            </p>
            <p className="text-[#85858c] text-sm font-medium">CTO, Density</p>
          </div>

          <img
            className="absolute bottom-0 right-0"
            src="../../public/image 95.png"
          />
        </div>

        <div className="relative bg-[#27282e] w-[323px] h-[365px]">
          <div className="relative top-14 left-8">
            <p className="text-xl font-bold text-white opacity-80">
              Deepak Vasman
            </p>
            <p className="text-[#85858c] text-sm font-medium">CBO, Density</p>
          </div>

          <img
            className="absolute bottom-0 right-0"
            src="../../public/image 95.png"
          />
        </div>
      </div>
    </FLEX>
  );
}

export default Visionaries;
