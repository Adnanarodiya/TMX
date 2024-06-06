/* eslint-disable react/no-unescaped-entities */
// import Footer from "./components/pages/Footer";
import Hero from "./components/pages/Hero";
import WhoWeAre from "./components/pages/WhoWeAre";
import OurService from "./components/pages/OurService";
import OurGlobalReach from "./components/pages/OurGlobalReach";
import ClientsSay from "./components/pages/ClientsSay";
import Benefits from "./components/pages/Benefits";
import Affiliate from "./components/pages/Affiliate";

function App() {
  return (
    <>
      {/* <div className="bg-purple  text-center text-white py-3 text-[13px] sm:text-[15px] min-h-[50px]">
        <div className="container">
          <p>
            Have a question or need assistance with your logistics needs? Our
            team is here to help. Contact us today for a personalized solution
            tailored to your business.
          </p>
        </div>
      </div> */}
      <Hero />
      <WhoWeAre />
      <OurService />
      <OurGlobalReach />
      <Affiliate />
      <Benefits />
      <ClientsSay />
      {/* <Footer />
      <div className="bg-purple text-center min-h-[50px] text-white py-3">
        © 2024 TMX Global All rights reserved
      </div> */}
    </>
  );
}

export default App;
