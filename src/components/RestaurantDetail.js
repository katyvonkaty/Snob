import React from "react";

const RestaurantDetail = ({restaurant}) => {
  if (!restaurant) {
    return null
  }

  return (
    <div>
    <h1> {restaurant.name}</h1>
    <p> {restaurant.review_count} </p>
    <a href={restaurant.url} rel="noreferrer" target="_blank">Visit {restaurant.name} Website </a>
    </div>
  )

}

export default RestaurantDetail;
