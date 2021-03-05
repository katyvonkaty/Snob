import React from "react";

const RestaurantDetail = ({restaurant}) => {
  if (!restaurant) {
    return null
  }

  return (
    <div>
    <h1> <b> {restaurant.name} </b> Reviews</h1>
    <a href={restaurant.url} rel="noreferrer" target="_blank" style={{marginBottom:"20px"}}>Visit {restaurant.name} Website </a>
    </div>
  )

}

export default RestaurantDetail;
