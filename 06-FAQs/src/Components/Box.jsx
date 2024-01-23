import React, { useState } from "react"
import Item from "./Item"
import DATA from "../utils/data"
const Box = ({ question, answer }) => {
  return (
    <div className="box">
      <div className="header-wrapper">
        <h2 className="header">FAQs</h2>
      </div>
      <div className="items-wrapper">
        {DATA.map((item) => (
          <Item key={item.id} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  )
}

export default Box
