function Chart() {
  return (
    <div className="bg-[#010101] min-h-screen py-10 flex flex-col items-center px-1 pt-20 text-white">
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

      <div className="flex flex-col items-center justify-center pt-40">
        <div className="text-3xl font-bold sm:text-5xl">
          <span className="font-medium text-[#d4f938]">Unlock </span>
          New Frontiers
        </div>
        <p className="pt-5 font-light text-center">
          Are you a stock trader looking for new opportunities to make <br />
          money? We got you covered!
        </p>
      </div>

      <div className="flex items-center justify-center pt-20 pb-10 text-sm font-medium text-center sm:text-2xl sm:gap-14">
        <div>Same Strategies</div>
        <div>Same Indicators</div>
        <div>Better Leverage</div>
        <div>24x7 Trading</div>
      </div>

      <img
        className="h-60 w-[700px] sm:w-[1130px] sm:h-[539px]"
        src="../../public/chart.png"
      />
    </div>
  );
}

export default Chart;
