import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutUsSection from './components/AboutUsSection';
import CustomersSection from './components/CustomersSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Chatbot from './components/ChatBot';
import Camera from './components/camera';
import Terrain from './components/terrain-analyzer';
import './App.css';
import { useState } from 'react';


function App() {
  // State to control when to show the Camera component
  const [showCamera, setShowCamera] = useState(false);

  // Function to toggle the Camera view on "Explore" button click
  const handleExploreClick = () => {
    setShowCamera(true); // Show only the Camera component
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {!showCamera ? (
          // Show other components if showCamera is false
          <>
          <HeroSection onExploreClick={handleExploreClick} />
          <ProductsSection />
          < Terrain />
          <AboutUsSection />
          <CustomersSection />
          <FAQSection />
          </>
          
        ) : (
          // Show only the Camera component when showCamera is true
          <Camera />
        )}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
