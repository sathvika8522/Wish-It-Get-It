import React,{ useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const WishCardDetails = () => {
  const [foodItem, setFoodItem] = useState([]);
  const {id} = useParams()

  const viewDetails = async() => {
    const res = await axios.get(`http://localhost:5000/getFoodItem/${id}`);
    if (res) {
      console.log("after ",res.data)
      setFoodItem(res.data);
    }
  };

  useEffect(()=>{
      viewDetails();
  },[]);

  return <div>WishCardDetails
      {id}
      {foodItem.map((f)=>{
        <h1>{f.foodName}</h1>
      })}
  </div>;
};

export default WishCardDetails;
