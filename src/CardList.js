import React from "react";
import Card from "./Card"


const CardList = ({category}) => {

  const cardComponent = category.map( (resto,index) => {
    return <Card key={index} id={category[index].id} name={category[index].name}/>
  })

  return (
    <div>
      {cardComponent}
    </div>
  )
}

export default CardList


// axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`
