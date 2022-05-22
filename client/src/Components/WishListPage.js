import axios from "axios";
import React, { useEffect, useState } from "react";
import WishCard from "./WishCard";
import '../styles/WishCard.css'

const WishListPage = () => {
  const [foodItemsList, setFoodItemsList] = useState([]);

  const getWishList = async () => {
    const res = await axios.get("http://localhost:5000/getFoodItems");
    console.log("Console data  ", res.data);
    if (res) {
      setFoodItemsList(res.data);
    }
  };

  useEffect(() => {
    getWishList();
  }, []);

  const foodCard = (
    <div className="body-controls">
      <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {foodItemsList.map((food) => {
            return (
              <>
                <WishCard key={food._id} food={food} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {foodCard}
    </>
  );
};

export default WishListPage;
