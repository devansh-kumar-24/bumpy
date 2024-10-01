const AboutUsSection = () => (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-black mb-8">About Us</h2>
        <p className="text-2xl text-gray-700 text-center mb-12">
          Bumpy Buddy is revolutionizing navigation with AI-powered technology, making every journey smoother and more enjoyable.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 shadow-lg rounded-lg p-6 bg-white">
            <h3 className="font-bold text-xl mb-4">Our Mission</h3>
            <p className="text-gray-700">To provide intelligent navigation solutions that enhance the travel experience for everyone.</p>
          </div>
          <div className="flex-1 shadow-lg rounded-lg p-6 bg-white">
            <h3 className="font-bold text-xl mb-4">Our Vision</h3>
            <p className="text-gray-700">A world where every journey is an adventure, guided by cutting-edge AI technology.</p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default AboutUsSection;
  