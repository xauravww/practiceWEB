import React, { useState } from "react"
import "./card.css"
const Card = ({ id, name, info, image, price, handleDeleteOne }) => {
  const [isToggleActive, setisToggleActive] = useState(false)
  return (
    <div className="tour-card">
      <img src={image} alt="" />
      <div className="name-wrapper">
        <h3>{name}</h3>
        <div className="price">$ {price}</div>
      </div>

      <p className="info">
        {isToggleActive ? info : info.slice(0, 250) + "..."}
        <button
          className="toggle-btn"
          onClick={() => setisToggleActive(!isToggleActive)}
        >
          {isToggleActive ? "Show Less" : "Read More"}
        </button>
      </p>
      <button
        className="btn-not-interested"
        onClick={() => handleDeleteOne(id)}
      >
        Not Interested
      </button>
    </div>
  )
}

export default Card
