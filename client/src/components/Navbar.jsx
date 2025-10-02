import { Search, ShoppingBag, X, Menu } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Menu", path: "/menu" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="flex justify-between items-center w-[95%] mx-auto py-4 relative">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            FLA<span className="text-amber-500">VORIZ</span>
          </h1>
        </div>

        {/* Middle nav (desktop) */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.id}
              to={navLink.path}
              className={({ isActive }) =>
                `font-bold transition-colors duration-200 hover:text-amber-500 ${
                  isActive ? "text-zinc-800" : "text-gray-500"
                }`
              }
            >
              {navLink.name}
            </NavLink>
          ))}
        </div>

        {/* Right side (desktop) */}
        <div className="hidden md:flex gap-6 items-center">
          <div className="cursor-pointer hover:text-amber-500 transition-colors">
            <Search size={20} />
          </div>
          <div className="cursor-pointer hover:text-amber-500 transition-colors">
            <ShoppingBag size={20} />
          </div>
          <Button className="bg-amber-500 cursor-pointer hover:bg-amber-600 text-white">
            Sign In
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="cursor-pointer hover:text-amber-500 transition-colors">
            <ShoppingBag size={20} />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer hover:text-amber-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg z-40">
          <div className="flex flex-col py-4 px-6">
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.id}
                to={navLink.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 px-4 font-medium transition-colors duration-200 hover:text-amber-500 hover:bg-amber-50 rounded-lg ${
                    isActive ? "text-gray-950 bg-amber-50" : "text-gray-600"
                  }`
                }
              >
                {navLink.name}
              </NavLink>
            ))}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t">
              <Button className=" bg-amber-500 hover:bg-amber-600 text-white flex-1">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
