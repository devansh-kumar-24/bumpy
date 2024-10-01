import ProductCard from './ProductCard';
import img1 from '../assets/img3.png';
import img2 from '../assets/img2.png';

const ProductsSection = () => (
  <>
    {/* Heading Section with white background */}
    <div className="w-full bg-white py-6">
      <div className="container mx-auto px-4 w-[85%]">
        <h2 className="text-5xl font-bold  text-center text-black">Our Products</h2>
      </div>
    </div>

    {/* Product Cards Section */}
    <section className="bg-pattern bg-gray-100 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 w-[85%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
      {/* Optional background styling */}
      <style jsx>{`
        .bg-pattern {
          background-color: #f3f4f6;
          background-image: 
            radial-gradient(circle at 100% 150%, #f3f4f6 24%, #e5e7eb 24%, #e5e7eb 28%, #f3f4f6 28%, #f3f4f6 36%, #e5e7eb 36%, #e5e7eb 40%, transparent 40%, transparent),
            radial-gradient(circle at 0    150%, #f3f4f6 24%, #e5e7eb 24%, #e5e7eb 28%, #f3f4f6 28%, #f3f4f6 36%, #e5e7eb 36%, #e5e7eb 40%, transparent 40%, transparent),
            radial-gradient(circle at 50%  100%, #e5e7eb 10%, #f3f4f6 10%, #f3f4f6 23%, #e5e7eb 23%, #e5e7eb 30%, #f3f4f6 30%, #f3f4f6 43%, #e5e7eb 43%, #e5e7eb 50%, #f3f4f6 50%, #f3f4f6 63%, #e5e7eb 63%, #e5e7eb 71%, transparent 71%, transparent),
            radial-gradient(circle at 100% 50%, #e5e7eb 5%, #f3f4f6 5%, #f3f4f6 15%, #e5e7eb 15%, #e5e7eb 20%, #f3f4f6 20%, #f3f4f6 29%, #e5e7eb 29%, #e5e7eb 34%, #f3f4f6 34%, #f3f4f6 44%, #e5e7eb 44%, #e5e7eb 49%, transparent 49%, transparent),
            radial-gradient(circle at 0    50%, #e5e7eb 5%, #f3f4f6 5%, #f3f4f6 15%, #e5e7eb 15%, #e5e7eb 20%, #f3f4f6 20%, #f3f4f6 29%, #e5e7eb 29%, #e5e7eb 34%, #f3f4f6 34%, #f3f4f6 44%, #e5e7eb 44%, #e5e7eb 49%, transparent 49%, transparent);
          background-size: 100px 50px;
        }
      `}</style>
    </section>
  </>
);

export default ProductsSection;
