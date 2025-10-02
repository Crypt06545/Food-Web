import ExploreMenu from "@/components/ExploreMenu";
import Hero from "@/components/Hero";
import React, { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="min-h-screen w-[95%] mx-auto py-6 overflow-x-hidden">
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
