import { food_list } from "@/assets/frontend_assets/assets";
import React from "react";
import FoodItem from "./FoodItem";

const FoodList = () => {
  return (
    <div>
      <h1>Top Dishes near you</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {food_list.map((item, ind) => (
          <FoodItem key={ind} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
