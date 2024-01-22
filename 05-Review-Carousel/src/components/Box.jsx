import React from "react"
import "./Box.css"
const Box = ({
  name,
  job,
  img,
  description,
  setcurrentIndex,
  currentIndex,
  total
}) => {
  return (
    <div className="Box">
      <div className="box-img-wrapper">
        <img className="box-img" src={img} alt="" />
        <div className="quote-img-wrapper">
          <img
            className="quote-img"
            src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705930378/quote-up-circle-svgrepo-com_aafgtr.svg"
            alt=""
          />
        </div>
      </div>
      <div className="name">{name}</div>
      <div className="title">{job}</div>
      <div className="description">{description}</div>
      <div className="navigate-btns-wrapper">
        <img
          src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705936377/left-2-svgrepo-com_bmyirj.svg"
          className="-img-navigate-left"
          alt="left"
          onClick={() =>
            setcurrentIndex(currentIndex == 1 ? total : currentIndex - 1)
          }
        />
        <img
          src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705936387/right-2-svgrepo-com_odtbav.svg"
          className="img-navigate-right"
          alt="right"
          onClick={() =>
            setcurrentIndex(currentIndex == total ? 1 : currentIndex + 1)
          }
        />
      </div>
      <div className="suprise-btn-wrapper">
        <button
          className="btn-surprise"
          onClick={() => setcurrentIndex(Math.floor(Math.random() * 4) + 1)}
        >
          Suprise Me
        </button>
      </div>
    </div>
  )
}

export default Box
