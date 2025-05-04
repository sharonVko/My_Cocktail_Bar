const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4 text-center">
      <p>&copy; 2025 My Cocktail Bar. All rights reserved.</p>
      <p>Follow us on social media:</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-amber-400 hover:text-white">
          Facebook
        </a>
        <a href="#" className="text-amber-400 hover:text-white">
          Twitter
        </a>
        <a href="#" className="text-amber-400 hover:text-white">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
