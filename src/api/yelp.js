import axios from "axios"

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `${process.env.REACT_APP_API_KEY}`
}
})