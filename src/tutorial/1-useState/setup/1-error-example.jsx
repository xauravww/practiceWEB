import React from "react"

const ErrorExample = () => {
  let text = "hello"

  const handleTextChange = () => {
    text = 123
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

export default ErrorExample
