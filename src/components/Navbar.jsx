import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          M21 Sport
        </Link>

        <button
          className="text-3xl lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className="hidden gap-6 text-lg lg:flex">
          <li>
            <NavLink to="/" className="hover:text-yellow-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="hover:text-yellow-300">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="hover:text-yellow-300">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="bg-blue-600 lg:hidden">
          <ul className="flex flex-col items-center space-y-3 py-4 text-lg">
            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" onClick={() => setIsOpen(false)}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" onClick={() => setIsOpen(false)}>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
