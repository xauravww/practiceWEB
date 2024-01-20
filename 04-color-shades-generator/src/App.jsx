import { useState, useEffect } from "react"

import "./App.css"
import Card from "./Components/card"
import Values from "values.js"

function App() {
  const [color, setColor] = useState("")

  const [shadeVariations, setshadeVariations] = useState("")
  const [error, setError] = useState(false)
  const [shades, setShades] = useState([])
  const [isInfoDialogVisible, setisInfoDialogVisible] = useState(false)

  useEffect(() => {}, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      let colors = new Values(color).all(parseInt(shadeVariations))
      setShades(colors)
      setError(false)
    } catch (error) {
      setError(true)
      throw new Error(error)
    }
  }

  const handleReset = () => {
    setColor("")

    setshadeVariations("")
    setShades([])
    setError(false)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".info-container") &&
        !e.target.classList.contains("info-img")
      ) {
        setisInfoDialogVisible(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isInfoDialogVisible])

  return (
    <div className="container">
      {isInfoDialogVisible && (
        <div className="info-container">
          <ul>
            <li>Give Color in any format</li>
            <li>Any css color name</li>
            <li>Any color e.g red , salmon , black etc.</li>
            <li>Any hex code e.g #000000 , #ccc</li>
            <li>Any rgb , rgba , hsl , hsla</li>
            <li>
              e.g rgb(0,0,0) , rgba(0,0,0,0.5), hsl(0,0,0), hsla(0,0,0,0.5)
            </li>
            <li>For best results , use 10 as the number of shades</li>
            <li>More shades no. means less color variations</li>
            <li>Click the color-box to copy their hex code to clipboard</li>
            <li>Click outside to close</li>
          </ul>
        </div>
      )}
      <h1>Color Shade Generator</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder={`Enter color in any format`}
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            borderColor: error ? "red" : "white"
          }}
        />
        <input
          type="number"
          className="input"
          placeholder="Enter the number of shades"
          value={shadeVariations}
          onChange={(e) => setshadeVariations(e.target.value)}
        />
        <img
          className="info-img"
          src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705758451/info-circle-svgrepo-com_iiqbuj.svg"
          alt=""
          onClick={() => setisInfoDialogVisible(!isInfoDialogVisible)}
        />
        <div className="btn-wrapper">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleReset()}
          >
            Reset
          </button>
          <button type="submit" className="btn">
            Convert
          </button>
        </div>
      </form>
      <div className="cards-gallery">
        {shades.map((color, index) => {
          const { hex, weight } = color
          const colorHex = `#${hex}`
          const weightPercent = `${weight}%`
          console.log(index)
          return (
            <div className="cards" key={index}>
              <Card
                colorHex={colorHex}
                weightPercent={weightPercent}
                key={index}
                index={index}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
