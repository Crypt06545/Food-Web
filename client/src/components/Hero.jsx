import React from "react";
import { Button } from "./ui/button";
import { ChefHat, Download } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Hero = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".content", {
      x: -100,
      opacity: 0,
      duration: 0.7,
      delay: 0.25,
    });
  }, []);
  return (
    <div
      className="relative bg-cover bg-center h-[80vh] flex items-center rounded-2xl overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="content relative z-10 w-[90%] md:w-[70%] mx-auto text-center md:text-left text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Adventure of <span className="text-amber-400">Delicacies</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto md:mx-0">
          Unlock a world of culinary variety and unleash your inner chef the
          easy way with{" "}
          <span className="font-semibold text-amber-300">Flavoriz</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
          {/* Explore Recipes */}
          <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-7 py-3 text-lg rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
            <ChefHat className="w-6 h-6" />
            Explore Recipes
          </Button>

          {/* Get Our Mobile App */}
          <Button
            variant="outline"
            className=" text-black  hover:text-black px-7 py-3 text-lg rounded-xl flex items-center gap-3"
          >
            <Download className="w-6 h-6" />
            Get Our Mobile App
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
