import { exchanges } from '../constants';

function FeesCards() {
  return (
    <div className="bg-[#010101] pt-20 flex justify-center items-center flex-col min-h-screen text-white">
      <p className="pb-5 text-3xl sm:text-5xl">
        Trade More.
        <span className="font-medium text-[#ebff25]"> Pay Less.</span>
      </p>
      <p className="text-sm font-light sm:text-xl">
        Our low Fees Supercharge Your Profits
      </p>

      <div className="flex flex-col items-center justify-center gap-1 sm:flex-row">
        {exchanges.map((item) => (
          <img
            className="py-4 w-60 "
            key={item.image}
            src={item.image}
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
}

export default FeesCards;
