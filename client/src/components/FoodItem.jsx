import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import StarRatings from "react-star-ratings";

const FoodItem = ({ item }) => {
  return (
    <div className="cursor-pointer ">
      <Card>
        <CardContent>
          <div>
            <img src={item?.image} alt={item?.name} />
          </div>
          <div>
            <div>
              <p>{item?.name}</p>
            </div>
            <p>{item?.description}</p>
            {/* <StarRatings /> */}
          </div>
        </CardContent>
        <CardFooter>
          <p>{item?.price}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FoodItem;
