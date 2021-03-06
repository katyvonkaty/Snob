import axios from "axios"

export default axios.create({
  baseURL:"https://floating-brushlands-33402.herokuapp.com/https://api.yelp.com/v3/businesses",
  headers: {
    'Authorization': `${process.env.REACT_APP_API_KEY}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET , DELETE , PUT , OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'


}
})
