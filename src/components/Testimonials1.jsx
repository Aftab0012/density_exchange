import { FLEX } from '../globalStyles/NavbarStyles';

function Testimonials1() {
  return (
    <FLEX className="w-auto min-h-screen px-6 pb-20 sm:px-0">
      <div className="pt-10 font-sans text-3xl font-bold sm:text-5xl">
        Dont&apos;t take our word for it.
      </div>
      <p className="text-lg font-light leading-6 text-center md:leading-5 md:text-md lg:text-lg xl:text-xl">
        Hear it from our expert community of traders who have made <br /> insane
        amounts in a short amount of time
      </p>

      <div className="flex flex-col items-center justify-center gap-5 sm:flex-wrap sm:flex-row">
        <div className="w-[250px] h-[450px] bg-[#f0f0f0] p-4 relative">
          <p className="mb-2">
            As someone who&apos;s always looking for the next big thing, I was
            really excited to try out Density&apos;s crypto futures trading
            platform. And I have to say, it definitely lived up to my
            expectations.
          </p>
          <div className="flex items-start justify-between">
            <p className="pt-10 text-sm font-semibold text-gray-600">
              <p className="pb-3 text-lg font-bold leading-4 text-black">
                Prakash Jamatia
              </p>
              Founder Tradeshala
            </p>
            <img
              src="../../public/testimonial1.png"
              alt="Testimonial"
              className="relative bottom-[-37px] object-cover"
            />
          </div>
        </div>

        <div className="w-[250px] h-[450px] bg-[#f0f0f0] p-4 relative">
          <p>
            I&apos;m not a seasoned trader, but this website has made it easy
            for me to get started with crypto futures trading. Their KYC was
            very fast and the educational resources were really helpful.
          </p>
          <div className="flex items-start justify-between">
            <p className="pt-10 text-sm font-semibold text-gray-600">
              <p className="pb-3 text-lg font-bold leading-5 text-black">
                Shambhavi Nayak.
              </p>
              Comodity Trader
            </p>
            <img
              className="ml-[-50px] relative mb-[10px] object-cover"
              alt="testimonial2"
              src="../../public/testimonial2.png"
            />
          </div>
        </div>

        <div className="w-[250px] h-[450px] bg-[#f0f0f0] p-4 relative">
          <p>
            I&apos;ve been using this platform for a few months now and
            it&apos;s been a great experience. I was delighted to see all the
            major crypto coins listed on Density Exchange.
          </p>
          <div className="flex items-start justify-between">
            <p className="pt-10 text-sm font-semibold text-gray-600">
              <p className="pb-3 text-lg font-bold leading-5 text-black">
                Arjun Naik.
              </p>
              Equity Trader
            </p>
            <img
              className="relative bottom-[-21px] object-cover"
              src="../../public/testimonial3.png"
              alt="testimonial3"
            />
          </div>
        </div>
      </div>
    </FLEX>
  );
}

export default Testimonials1;
