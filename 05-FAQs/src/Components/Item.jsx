import React, { useState } from "react"

const Item = ({question, answer}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="item">
      <div className="item-content-wrapper">
        <div className="item-content">{question}</div>
        <img
          className="item-btn"
          src={
            !open
              ? "https://res.cloudinary.com/drvntsbpo/image/upload/v1705994527/add-circle-svgrepo-com_rrm9xq.svg"
              : "https://res.cloudinary.com/drvntsbpo/image/upload/v1705994540/remove-svgrepo-com_uorfze.svg"
          }
          alt="open-close-btn"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && <div className="item-answer">{answer}</div>}
    </div>
  )
}

export default Item
