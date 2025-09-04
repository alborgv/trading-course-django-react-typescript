import { Link } from "react-router-dom";
import TickerTape from "components/TradingViewWidget/TickerTape";

export default function Navbar() {
    return (
        <nav className="bg-primary shadow-sm flex flex-col">
            <div className="bg-primary text-white font-poppins font-semibold px-6 md:px-24 py-3 flex justify-between items-center">
                <Link to="/" className="text-lg font-bold">
                    <img src="/" alt="logo" className="h-8 inline" />
                </Link>
                <ul className="hidden md:flex justify-end flex-grow space-x-8">
                    <li>
                        <Link to="/" className="hover:text-primaryText">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-primaryText">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/course" className="hover:text-primaryText">Course</Link>
                    </li>
                    <li>
                        <Link to="/login" className="text-primaryText hover:text-primaryTextHover">Login</Link>
                    </li>
                </ul>
            </div>
            <div className="bg-primary">
                <TickerTape />
            </div>
        </nav>
    )
}