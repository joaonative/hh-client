import SimpleLoginButton from "./SimpleLoginButton";

function HeroSection() {
  return (
    <div className="w-full h-max lg:px-32 px-8 flex lg:flex-row flex-col items-center gap-5 lg:justify-between">
      <div className="flex flex-col gap-3 lg:gap-6">
        <h1 className="text-5xl">
          Take care of <br /> your{" "}
          <span className="custom-gradient-text">mental health</span>
        </h1>
        <h2 className="font-medium text-2xl">
          Track positive habits effortlessly, <br />
          elevate your well-being with <br className="lg:hidden" /> Harmony Hub{" "}
          <br className="hidden lg:block" />
          your personal{" "}
          <span className="text-primary">mental health companion.</span>
        </h2>
        <div className="w-max h-max flex flex-row gap-6">
          <SimpleLoginButton name="Try it now" primary />
          <SimpleLoginButton name="Its free" />
        </div>
      </div>
      <img src="hero-1.svg" alt="Tracking progress" className="lg:h-96 h-72" />
    </div>
  );
}

export default HeroSection;
