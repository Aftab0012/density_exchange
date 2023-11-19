import '../App.css';

function HeroSection() {
  return (
    <div className="min-h-min sm:min-h-screen bg-custom-black">
      <p className="pt-10 text-center sm:text-[76px] sm:leading-[100px] text-4xl font-bold text-white">
        It&apos;s time to trade <br /> the
        <span className="glow-text"> future</span>.
      </p>

      <p className="pt-10 text-xl font-normal text-center text-white">
        Trade BTC, ETH Futures with 125x leverage and earn rewards.
      </p>

      <section className="flex pt-10 glow-background sm:items-center sm:justify-center w-72 h-72 sm:h-auto sm:w-auto">
        <img
          className="relative left-4"
          src="../../public/iPhone 14 Pro left.png"
        />
        <img
          className="z-10 mt-[-20px] sm:mt-[-10px] sm:w-auto sm:h-auto h-72"
          src="../../public/iPhone 14 Pro Space Black Mockup label.png"
        />
        <img
          className="relative right-4"
          src="../../public/iPhone 14 Pro right.png"
        />
      </section>
    </div>
  );
}

export default HeroSection;
