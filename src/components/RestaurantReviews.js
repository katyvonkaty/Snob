import React from "react";
import Review from "./Review"
import Grid from "@material-ui/core/Grid";


const RestaurantReviews = ({reviews, onRestaurantSelect}) => {
  const renderedList = reviews.map((review) => {
       return <Review onRestaurantSelect={onRestaurantSelect} review={review} />
  })

  if (!renderedList) {
    return <h1> thinking </h1>
  }

  return(
    <>
    <Grid spacing={2} container style={{marginTop:"20px"}} justify="center" alignItems="center">
        {renderedList}
    </Grid>
    </>


  )
}

export default RestaurantReviews;
