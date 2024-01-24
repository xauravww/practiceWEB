import { useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Item from "./Components/Item"
import DATA from "./utils/data"

function App() {
  const [classArray, setclassArray] = useState([])
  const [showItem, setshowItem] = useState([])
  useEffect(() => {
    const uniqueClasses = [...new Set(DATA.map((data) => data.class))]
    setclassArray(uniqueClasses.reverse())
    // console.log("uniqueClasses", uniqueClasses)
    // console.log("classArray", classArray)
    setshowItem(uniqueClasses[0])
    // console.log("showItem", showItem)
  }, [])

  const handleClick = (e) => {
    // console.log(e.target.innerText)
    setshowItem(e.target.innerText)
  }
  return (
    <div className="App">
      <header className="header">Education</header>
      <div className="grid-container">
        <div className="btn-wrapper">
          {classArray.map((item) => {
            return (
              <div
                key={item}
                className="experience-btn"
                onClick={handleClick}
                style={{
                  borderLeft: showItem === item ? "5px solid black" : "none"
                }}
              >
                {item}
              </div>
            )
          })}
        </div>
        <div className="info-wrapper">
          {showItem &&
            DATA.filter((data) => data.class === showItem).map((data) => {
              return (
                <Item
                  key={data.id}
                  class={data.class}
                  school={data.school}
                  time={data.time}
                  marks={data.marks}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default App
