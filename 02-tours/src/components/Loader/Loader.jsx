import React from "react"
import { Audio } from "react-loader-spinner"
const Loader = () => {
  return (
    <>
      <Audio
        height="80vh"
        width="80vw"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </>
  )
}

export default Loader
