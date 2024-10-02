import ProductCard from './ProductCard';
import img1 from '../assets/img3.png';
import img2 from '../assets/img2.png';

const ProductsSection = () => (
  <>
    {/* Heading Section with white background */}
    <div className="w-full bg-yellow-50 pt-20 pb-5">
      <div className="container mx-auto px-4 w-[85%]">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900">Our Products</h2>
      </div>
    </div>

    {/* Product Cards Section */}
    <section className="bg-pattern bg-yellow-50 py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 w-[85%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <ProductCard
            name="Bumpy Navigator"
            description="AI-powered navigation for smooth journeys"
            image={img1}
          />
          <ProductCard
            name="Terrain Analyzer"
            description="Advanced terrain analysis for optimal route planning"
            image={img2}
          />
        </div>
      </div>
      
    </section>
  </>
);

export default ProductsSection;
