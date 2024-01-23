import { useState, useEffect } from "react"

import "./App.css"
import Items from "./Components/Items"
import DATA from "./utils/data"

function App() {
  const [buttonsArray, setbuttonsArray] = useState([])
  const [activeTabItem, setactiveTabItem] = useState(DATA)

  useEffect(() => {
    const updatedButtonsArray = DATA.reduce((acc, item) => {
      if (!acc.includes(item.type)) {
        acc.push(item.type)
      }
      return acc
    }, [])

    setbuttonsArray(updatedButtonsArray)
  }, [])

  const handleClick = (e) => {
    const value = e.target.textContent
    console.log("target value :" + value)
    if (value === "All") {
      setactiveTabItem(DATA)
    } else {
      const filteredItems = DATA.filter((item) => item.type === value)
      setactiveTabItem(filteredItems)
    }
  }

  return (
    <div className="App">
      <h1 className="title">Our Menu</h1>
      <div className="btns-wrapper">
        <button className="btn" onClick={handleClick}>
          All
        </button>
        {buttonsArray.map((item, index) => (
          <button key={index} className="btn" onClick={handleClick}>
            {item}
          </button>
        ))}
      </div>
      <div className="grid-container">
        {activeTabItem.map((item) => (
          <Items key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default App
