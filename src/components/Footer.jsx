const Footer = () => (
  <footer className="bg-black text-white py-6 sm:py-8">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Bumpy Buddy. All rights reserved.</p>
      <nav className="flex space-x-4">
        <a href="#privacy" className="hover:underline">Privacy Policy</a>
        <a href="#terms" className="hover:underline">Terms of Service</a>
        <a href="#contact" className="hover:underline">Contact Us</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
