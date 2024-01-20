import React, { useState } from "react"

const Card = ({ colorHex, weightPercent, index }) => {
  const handleCopy = (e) => {
    navigator.clipboard.writeText(colorHex)
    // alert("Copied the text: " + colorHex)
    const target = e.target.closest(".cards")
    const info = target.querySelector(".info")
    console.log(e.target)
    // console.log(info.parentElement)
    info.style.display = "block"
    setTimeout(() => {
      info.style.display = "none"
    }, 2000)
  }

  return (
    <div
      className="cards"
      style={{
        backgroundColor: colorHex,
        color: index > 10 ? "white" : "black"
      }}
      onClick={handleCopy}
    >
      <div className="info">Copied to Clipboard</div>
      <div className="cards-wrapper" onClick={handleCopy}>
        <div>{weightPercent}</div>
        <div>{colorHex}</div>
      </div>
    </div>
  )
}

export default Card
