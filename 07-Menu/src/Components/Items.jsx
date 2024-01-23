import React from "react"

const Items = ({ title, price, img, desc }) => {
  return (
    <div className="grid-item">
      <div className="item-wrapper">
        <div className="img-wrapper">
          <img className="item-img" src={img} alt="" />
        </div>
        <div className="info-wrapper">
          <div className="title-price-wrapper">
            <p className="info-title">{title}</p>
            <p className="price">{price}</p>
          </div>
          <p className="info-desc">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Items
