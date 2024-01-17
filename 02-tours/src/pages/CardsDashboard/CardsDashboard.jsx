import React from "react"
import Card from "../../components/Card/Card"
import './cardsdashboard.css'

const CardsDashboard = ({ tours, handleDeleteOne }) => {
  return (
    <div className="item-wrapper">
      {tours.map((tour) => {
        return (
          <Card
            key={tour.id}
            id={tour.id}
            name={tour.name}
            info={tour.info}
            image={tour.image}
            price={tour.price}
            handleDeleteOne={handleDeleteOne}
          />
        )
      })}
    </div>
  )
}

export default CardsDashboard
