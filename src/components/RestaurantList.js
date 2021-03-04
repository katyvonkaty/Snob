import React from "react";
import RestaurantItem from "./RestaurantItem"
import Grid from "@material-ui/core/Grid";


const RestaurantList = ({restaurants, onRestaurantSelect}) => {
  const renderedList = restaurants.map((restaurant) => {
       return <RestaurantItem onRestaurantSelect={onRestaurantSelect} restaurant={restaurant} />
  })

  return(
    <>
    <Grid spacing={4} container justify="center" alignItems="center">
        {renderedList}
    </Grid>

    </>


  )
}

export default RestaurantList;
