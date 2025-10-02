import { menu_list } from "@/assets/frontend_assets/assets";
import React from "react";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="mt-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Explore the <span className="text-amber-500">Menu</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
      </div>

      {/* Horizontal Menu List */}
      <div className="flex gap-6 overflow-x-scroll p-5 mb-5">
        {menu_list.map((item) => {
          const isActive = category === item?.menu_name;

          return (
            <div
              key={item?.menu_name}
              onClick={() =>
                setCategory((prev) =>
                  prev === item?.menu_name ? "All" : item?.menu_name
                )
              }
              className={`flex flex-col items-center flex-shrink-0 cursor-pointer transition-transform duration-200 ${
                isActive ? "scale-110" : "scale-100"
              }`}
            >
              <div
                className={`w-24 h-24 md:w-32 md:h-32 mb-2 rounded-full overflow-hidden border-4 ${
                  isActive ? "border-amber-500" : "border-transparent"
                } transition-colors duration-300`}
              >
                <img
                  src={item?.menu_image}
                  alt={item?.menu_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className={`text-gray-700 font-medium text-sm md:text-base text-center ${
                  isActive ? "text-amber-500" : ""
                }`}
              >
                {item?.menu_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
