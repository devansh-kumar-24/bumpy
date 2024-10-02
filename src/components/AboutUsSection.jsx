import image from '../assets/icons8-tick.gif';

const AboutUsSection = () => (
  <section className="bg-white py-16 md:py-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-8">About Us</h2>
      <p className="text-lg sm:text-2xl text-gray-700 text-center mb-12">
        Bumpy Buddy is revolutionizing navigation with AI-powered technology, making every journey smoother and more enjoyable.
      </p>
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
        <div className="flex-1 shadow-lg rounded-lg p-6 bg-white">
          <div className="flex items-center">
            <h3 className="font-bold text-lg sm:text-xl mb-4 mt-2">Our Mission</h3>
            <img src={image} alt="" className="ml-2 w-[10%] sm:w-[8%]" />
          </div>
          <p className="text-gray-700 text-base sm:text-lg">
            To provide intelligent navigation solutions that enhance the travel experience for everyone.
          </p>
        </div>
        <div className="flex-1 shadow-lg rounded-lg p-6 bg-white">
          <div className="flex items-center">
            <h3 className="font-bold text-lg sm:text-xl mb-4 mt-2">Our Vision</h3>
            <img src={image} alt="" className="ml-2 w-[10%] sm:w-[8%]" />
          </div>
          <p className="text-gray-700 text-base sm:text-lg">
            A world where every journey is an adventure, guided by cutting-edge AI technology.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
