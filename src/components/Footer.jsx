import { FLEX } from '../globalStyles/NavbarStyles';

function Footer() {
  return (
    <FLEX className="bg-[#229851] pb-10 sm:pb-16 pt-20">
      <img className="pb-10" src="../../public/density.png" />
      <div className="flex flex-wrap justify-center gap-10 px-5 font-medium text-white sm:flex-row">
        <div>Blog</div>
        <div>Fees</div>
        <div>Leaderboards</div>
        <div>Careers</div>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
      </div>

      <p className="px-5 pt-5 pb-5 text-sm font-light text-center text-white">
        Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
        Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
        pesask vyfisat. Viktiga poddradio har un mad och inde.{' '}
      </p>

      <div className="flex gap-10">
        <img src="../../public/facebook logo.png" />
        <img src="../../public/Twitter logo.png" />
        <img src="../../public/linkedin logo.png" />
        <img src="../../public/instagram logo.png" />
      </div>
    </FLEX>
  );
}

export default Footer;
