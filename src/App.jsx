import './App.css';
import { DIV } from './globalStyles/NavbarStyles';
import './App.css';
import MobileMenu from './components/MobileNav';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import FeesCards from './components/FeesCards';
import Chart from './components/Chart';
import StartSmallEarnBig from './components/StartSmallEarnBig';
import CreateAccountSteps from './components/CreateAccountSteps';
import BackedByBest from './components/BackedByBEst';
import Testimonials1 from './components/Testimonials1';
import EarnMoneySection from './components/EarnMoneySection';
import Visionaries from './components/Visionaries';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full">
      <DIV className="text-white">
        <img className="h-7 " src="../public/Frame.png" alt="logoImage" />
        <div className="items-center hidden gap-3 center sm:flex">
          <p>Career</p>
          <p>Blogs</p>
          <p>LeaderBoard</p>
          <p>Fees</p>

          <button className="ml-10 font-bold text-black glow-button">
            TRADE NOW
          </button>
        </div>

        <div className="flex sm:hidden">
          <MobileMenu />
        </div>
      </DIV>

      <section>
        <HeroSection />
      </section>

      <section>
        <FeaturesSection />
      </section>

      <section>
        <FeesCards />
      </section>

      <section>
        <Chart />
      </section>

      <section>
        <StartSmallEarnBig />
      </section>

      <section>
        <CreateAccountSteps />
      </section>

      <section>
        <BackedByBest />
      </section>

      <section>
        <Testimonials1 />
      </section>

      <section>
        <EarnMoneySection />
      </section>

      <section>
        <Visionaries />
      </section>

      <section>
        <GetStarted />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
