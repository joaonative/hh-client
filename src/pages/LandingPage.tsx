import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import HeroSection from "../components/ui/HeroSection";

function LandingPage() {
  return (
    <div className="flex flex-col lg:gap-20 gap-5 align-top items-center w-full h-max">
      <Header />
      <HeroSection />
      <div className="w-full h-max px-8 lg:px-32">
        <div className="bg-darker pt-6 px-4 lg:px-12 flex lg:flex-row flex-col items-center lg:items-start lg:justify-between gap-3 rounded-xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">
              <span className="text-primary">Streak Mastery Unleashed:</span>
              Insightful charts, <br />
              reminders, monthly insights and <br />
              streak tracking.
            </h1>
            <h2 className="text-xl lg:block hidden">
              Explore insightful charts, personalized reminders, <br />
              monthly insights, and seamless streak tracking <br />
              for a transformative habit-building experience.
            </h2>
          </div>
          <img src="iphone.png" alt="iphone screenshot" className="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
