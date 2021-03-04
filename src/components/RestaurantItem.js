import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// eslint-disable-next-line
import CardActions from "@material-ui/core/CardActions";
// eslint-disable-next-line
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from '@material-ui/core/styles';


const StyledRating = withStyles({
  iconFilled: {
    color: '#307848',
  },
  iconHover: {
    color: '#28b156',
  },
})(Rating);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 0,
    borderRadius: "10px",
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const RestaurantItem = ({ restaurant, onRestaurantSelect }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid
      onClick={() => onRestaurantSelect(restaurant)}
      item
      xs={10}
      sm={8}
      md={3}
      style={{
        marginLeft: "20px",
        marginTop: "20px",
        boxShadow: "3px 3px 5px 6px #eee",
        borderRadius: "10px",
      }}
    >

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.large}>
            {restaurant.name.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }

        title= <b> {restaurant.name} </b>

        subheader={restaurant.location.display_address}
      />
      Rating:
      <Rating
        readOnly
        name="customized-empty"
        defaultValue={restaurant.rating}
        precision={0.5}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      /> <br />



      Price:
      {restaurant.price ? (
        <StyledRating
        readOnly
          name="customized-color"
          defaultValue={restaurant.price.length}

          precision={0.5}
          icon={<MonetizationOnIcon fontSize="inherit" />}
        />) :
        <StyledRating
        readOnly
          name="customized-color"
          defaultValue={1}
          precision={0.5}
          icon={<MonetizationOnIcon fontSize="inherit" />}
        /> }



      <CardMedia className={classes.media} image={restaurant.image_url} style={{marginTop:"10px", marginBottom:"10px"}} />

      {restaurant.transactions[0] ? (
        <Chip
          avatar={<ShoppingBasketIcon />}
          label={restaurant.transactions[0] ? "Takeout Available" : null}
          clickable
          color="primary"
        />
      ) : null}
      {restaurant.transactions[1] ? (
        <Chip
          avatar={<LocalShippingIcon />}
          label={restaurant.transactions[1] ? "Delivery Available" : null}
          clickable
          color="primary"
        />
      ) : null}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Phone Number: {restaurant.display_phone}
        </Typography>
      </CardContent>



      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>

    </Grid>
  );
};

export default RestaurantItem;
