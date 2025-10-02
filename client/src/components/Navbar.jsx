import { Search, ShoppingBag } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Menu", path: "/menu" },
    { id: 4, name: "Contact", path: "/contact" },
  ];
  
  return (
    <nav className=" sticky top-0 z-50 bg-white shadow-md border-b overflow-x-hidden">
      <div className=" flex justify-between items-center w-[95%] mx-auto py-4">
        {/* left section  */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            FLA<span className="text-amber-500">VORIZ</span>
          </h1>
        </div>
        
        {/* middle section  */}
        <div className="flex gap-8">
          {navLinks.map((navLink) => (
            <NavLink 
              key={navLink.id} 
              to={navLink.path}
              className={({ isActive }) => 
                `font-medium transition-colors duration-200 hover:text-amber-500 ${
                  isActive ? "text-gray-950" : "text-gray-600"
                }`
              }
            >
              {navLink.name}
            </NavLink>
          ))}
        </div>
        
        {/* right section  for desktop*/}
        <div className="flex gap-6 justify-center items-center">
          <div className="cursor-pointer hover:text-amber-500 transition-colors">
            <Search size={20} />
          </div>
          <div className="cursor-pointer hover:text-amber-500 transition-colors">
            <ShoppingBag size={20} />
          </div>
          <div>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              Sign In
            </Button>
          </div>
        </div>

        {/* right section for mobile  */}
        <div className="md"></div>
      </div>
    </nav>
  );
};

export default Navbar;