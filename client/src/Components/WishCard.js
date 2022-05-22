import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/WishCard.css"

const WishCard = ({food}) => {
  const navigate = useNavigate()
  const viewDetails = async(id)=>{
    navigate(`/wishListCardDetails/${id}`)
  }

  return (
    <div className="col cards">
     <div className="card-controls">
        <div className="image-div">
            <img src="https://wallpaperaccess.com/full/3659404.jpg" alt="" />
        </div>
        <div className="content">
            <h3>{food.foodName}</h3>
            <h4>{food.price}$</h4>
            <button className="btn btn-primary" onClick={()=>viewDetails(food._id)}>View Details</button>
        </div>
     </div>
    </div>
  )
}

export default WishCard