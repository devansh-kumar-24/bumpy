const Footer = () => (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex justify-between">
        <p>&copy; {new Date().getFullYear()} Bumpy Buddy. All rights reserved.</p>
        <nav className="flex space-x-4">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
  
  export default Footer;
  