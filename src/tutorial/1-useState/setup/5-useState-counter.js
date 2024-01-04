import React, { useState } from "react"

const UseStateCounter = () => {
  const [count, setCount] = useState(0)

  const handleCountUp = () => {
    setTimeout(() => {
      setCount((prevCount) => {
      return prevCount + 1
    })
  },2000)
}

  return (
    <section className="counter" style={{ margin: ".4rem 0" }}>
      <h2>Normal Counter</h2>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
      <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>
      <h2>Synchronous Counter</h2>
      <h1>{count}</h1>

      <button className="btn" onClick={handleCountUp}>
        +
      </button>
    </section>
  )
}

export default UseStateCounter
