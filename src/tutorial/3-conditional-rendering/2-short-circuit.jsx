import React, { useState } from "react"
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Saurav")
  const firstValue = text || "hello world"
  const secondValue = text && "hello world"

  return (
    <>
      <h2>short-circuit evaluation</h2>
      <h2>FirstValue - {firstValue}</h2>
      {text && <h2>SecondValue - {secondValue}</h2>}
      <button
        className="btn"
        onClick={() => (text ? setText("") : setText("hello world"))}
      >
        Toggle SecondValue
      </button>
    </>
  )
}

export default ShortCircuit
