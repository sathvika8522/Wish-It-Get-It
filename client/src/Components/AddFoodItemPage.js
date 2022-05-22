import React, { useState } from "react";
import "../styles/AddFoodItemPage.css";
import axios from 'axios'

const AddFoodItemPage = () => {
  const [Item, setItem] = useState({ foodName: "", price: "" });

  const onInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setItem({ ...Item, [name]: value });
  };

  const onWishListSubmission = async(event) => {
    event.preventDefault()
    const res = await axios.post('http://localhost:5000/addFoodItem',Item)
    console.log(res.data)
  }

  return (
    <div class="body-controls">
      <div class="form-controls">
        <div class="input-controls">
          <label className="form-label" htmlFor="foodName">
            Food Item Name
          </label>
          <input
            className="form-control"
            type="text"
            name="foodName"
            id="foodName"
            value={Item.foodName}
            onChange={(event) => onInputChange(event)}
          />
        </div>

        <div class="input-controls">
          <label className="form-label" htmlFor="price">
            Price of the Item
          </label>
          <input
            className="form-control"
            type="text"
            name="price"
            id="price"
            value={Item.price}
            onChange={(event) => onInputChange(event)}
          />
        </div>

        <button type="submit" className="btn btn-secondary" onClick={(e)=>onWishListSubmission(e)}>
          Add To List
        </button>
      </div>
    </div>
  );
};

export default AddFoodItemPage;
