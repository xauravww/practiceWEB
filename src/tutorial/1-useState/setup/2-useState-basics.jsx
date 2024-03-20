import React, { useState } from "react"

const UseStateBasics = () => {
  const [text, setText] = useState("hello")

  const handleTextChange = () => {
    setText(123)
    console.log(text)
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={() => handleTextChange()}>
        Change Text
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
