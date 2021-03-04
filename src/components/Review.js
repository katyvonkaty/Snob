import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Rating from "@material-ui/lab/Rating";
import CardActions from '@material-ui/core/CardActions';
import StarBorderIcon from "@material-ui/icons/StarBorder";

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Review = ({review, onRestaurantSelect}) => {
  return (
    <Grid item xs={8} sm={8} md={4} style={{marginBottom:"30px"}}>

    <Card variant="outlined">
      <CardContent>
      Rating:
      <Rating
        readOnly
        name="customized-empty"
        defaultValue={review.rating}
        precision={0.5}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
        <Typography  color="textSecondary" gutterBottom>
          {review.text}
        </Typography>
      </CardContent>
      <CardActions>

        <img src={review.profile_url} alt="profile"/>
      </CardActions>
    </Card>
    </Grid>
  );
}

export default Review
