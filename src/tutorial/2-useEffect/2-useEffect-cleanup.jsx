import React, { useState, useEffect } from "react"

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [size])

  return (
    <>
      <h2>useEffect cleanup</h2>
      <h2>{size} px</h2>
    </>
  )
}

export default UseEffectCleanup
