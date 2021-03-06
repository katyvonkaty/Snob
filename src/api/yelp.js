import axios from "axios"

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
  headers: {
    'Authorization': `${process.env.REACT_APP_API_KEY}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'POST, GET , DELETE , PUT , OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'


}
})
