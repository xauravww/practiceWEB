import React, { useState, useEffect } from "react"
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log("useEffect called after every re-render")
    if (counter < 1) {
      document.title = "Counter < 1"
    } else {
      document.title = `New Message - (${counter})`
    }
  }, [counter])

  useEffect(() => {
    console.log("runs on initial render")
  }, [])

  return (
    <>
      <h2>useEffect Basics</h2>
      <h2>{counter}</h2>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        Counter
      </button>
    </>
  )
}

export default UseEffectBasics
