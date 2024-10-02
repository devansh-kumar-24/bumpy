import Designer from '../assets/2.png';

const HeroSection = () => (
  <section className="bg-green-50 w-[90%] mx-auto py-10">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center mb-10 lg:mb-20">
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black mb-4">
          Navigate Your Journey with Bumpy Buddy
        </h1>
        <p className="text-base sm:text-lg lg:text-2xl text-gray-600 mb-6 lg:mb-8">
          Your AI-Powered Map Companion for Seamless Exploration
        </p>
        <button className="bg-green-500 text-lg sm:text-xl hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg transition duration-300">
          Explore Now
        </button>
      </div>
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
        <img src={Designer} alt="AI-powered navigation" className="w-[90%] lg:w-[98%] h-auto" />
      </div>
    </div>
  </section>
);

export default HeroSection;
