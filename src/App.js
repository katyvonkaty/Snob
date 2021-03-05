import React from "react";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
// eslint-disable-next-line
import {index} from "./index.css"
import yelp from "./api/yelp";

import RestaurantList from "./components/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail";
import Container from "@material-ui/core/Container";
import RestaurantReviews from "./components/RestaurantReviews";


// attributes:"reservation" for restos with reservations

class App extends React.Component {
  state = {
    restaurants: [],
    selectedRestaurant: null,
    reviews:[]
  };


  onSearchSubmit = async (category, accessible) => {
    console.log(accessible);
    console.log(category);
// eslint-disable-next-line
    const response = await yelp.get(`/search?term=${category}`, {
      params: {
        location: "new york city",
        rating: "4.5",
        limit:"9",
        attributes: `${accessible}`
      },
    });
    this.setState({ restaurants: response.data.businesses })
  };

  onRestaurantSelect = async (restaurant) => {
    // eslint-disable-next-line
  const response  = await yelp.get(`/${restaurant.id}/reviews`)
        .then((response) => {
          this.setState({reviews: response.data.reviews})
        })
        this.setState({selectedRestaurant: restaurant})
  }

  render() {
    return (
      <>
        <Container maxWidth="lg" images>
      <Header />
      </Container>

        <Container maxWidth="lg">
          <h1 style={{marginBottom:"50px", textAlign:"center"}}> Restos </h1>
          <Container>
          <RestaurantDetail restaurant={this.state.selectedRestaurant} />
          <RestaurantReviews onRestaurantSelect= {this.onRestaurantSelect} reviews={this.state.reviews} />
          </Container>
           <SearchBox onSubmit={this.onSearchSubmit} style={{cursor:'pointer'}} />

          <p style={{textAlign:"center", padding:"30px"}}>Found: {this.state.restaurants.length} hits! </p>
        </Container>
        <RestaurantList onRestaurantSelect= {this.onRestaurantSelect} restaurants={this.state.restaurants} />

      </>
    );
  }
}

export default App;
