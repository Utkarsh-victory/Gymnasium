import { useState } from "react";
import { NavLink ,useNavigate} from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Membership", path: "#" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-lg text-white shadow-md">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-2xl font-bold text-red-500 tracking-wide hover:scale-110 transition duration-300 cursor-pointer">
            GYM
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {menuItems.map((item, i) =>
            item.name === "Membership" ? (
              <li key={i} className="relative group cursor-pointer">
                <span className="hover:text-red-500">Membership</span>

                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>

                <div className="absolute top-full left-0 pt-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div className="bg-black border border-gray-700 rounded-lg shadow-lg">
                    <NavLink
                      to="/basic"
                      className="block px-4 py-2 hover:bg-red-500 hover:rounded-xl"
                    >
                      Basic Plan
                    </NavLink>

                    <NavLink
                      to="/standard"
                      className="block px-4 py-2 hover:bg-red-500 hover:rounded-xl"
                    >
                      Standard Plan
                    </NavLink>

                    <NavLink
                      to="/premium"
                      className="block px-4 py-2 hover:bg-red-500 hover:rounded-xl"
                    >
                      Premium Plan
                    </NavLink>
                  </div>
                </div>
              </li>
            ) : (
              <li key={i} className="relative group">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `cursor-pointer ${
                      isActive ? "text-red-500" : "hover:text-red-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>

                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ),
          )}
        </ul>

        {/* Button */}
        <button
          onClick={() => navigate("/free-trial")}
          className="hidden md:block bg-red-500 px-5 py-2 rounded-4xl hover:bg-red-600 hover:scale-105 transition duration-300 shadow-lg"
        >
          Free Trial
        </button>

        {/* Mobile Menu */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}
