import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AddFoodItemPage from './AddFoodItemPage'
import WishCardDetails from './WishCardDetails'
import WishListPage from './WishListPage'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='addFoodItem' element={<AddFoodItemPage />} />
        <Route path='wishList' element={<WishListPage />} />
        <Route path='wishListCardDetails/:id' element={<WishCardDetails />} />
      </Routes>
    </>
  )
}

export default Routing