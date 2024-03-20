import React, { useState, useEffect } from "react"

const ShowHide = () => {
  const [size, setSize] = useState(window.innerWidth)
  const [show, setshow] = useState(true)
  useEffect(() => {
    const resizeHandler = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener("resize", resizeHandler)
    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  })
  return (
    <>
      <h2>show/hide</h2>
      <button className="btn" onClick={() => setshow(!show)}>
        Toggle Size
      </button>
      {show && <h2>Size - {size} px</h2>}
    </>
  )
}

export default ShowHide
