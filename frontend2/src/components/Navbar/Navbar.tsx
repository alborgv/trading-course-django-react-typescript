import { Link } from "react-router-dom";
import TickerTape from "../TradingViewWidget/TickerTape";

export default function Navbar() {
  return (
    <nav className="bg-bgPrimaryColor shadow-sm flex flex-col">
      <div className="px-24 pt-6 pb-3 flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <img src="/path/to/logo.png" alt="Logo" className="text-black h-8 inline" />
        </div>
        <div className="flex space-x-6 text-gray-200 font-semibold font-poppins text-lg">
          <Link to="/" className="hover:text-primaryColor">Home</Link>
          <Link to="/" className="hover:text-primaryColor">Pricing</Link>
          <Link to="/course" className="hover:text-primaryColor">Course</Link>
          <Link to="/" className="hover:text-primaryColor">Get Started</Link>
          <Link to="/" className="hover:text-primaryColor">Login</Link>
        </div>
      </div>
      <div>      
        <TickerTape/>
      </div>
    </nav>
  );
};
