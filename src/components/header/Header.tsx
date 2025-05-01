import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-emerald-300">
        My Cocktail Bar 🍸
      </h1>
      <nav className="flex space-x-4">
        <Link to="/" className="text-white hover:text-amber-300 mx-2">
          Home
        </Link>
        <Link to="/cocktails" className="text-white hover:text-amber-300 mx-2">
          Cocktails
        </Link>
        <Link to="/about" className="text-white hover:text-amber-300 mx-2">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
