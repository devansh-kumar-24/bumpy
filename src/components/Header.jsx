import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-black">Bumpy Buddy</a>
        <nav className="text-1xl hidden md:flex space-x-6">
          {['About Us', 'Contact Us', 'FAQ', 'Our Customers', 'Our Product'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-black hover:text-green-500 transition duration-300 ease-in-out">{item}</a>
          ))}
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          {['About Us', 'Contact Us', 'FAQ', 'Our Customers', 'Our Product'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block py-2 px-4 text-black hover:bg-green-500 hover:text-white">{item}</a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
