import React, { useState } from "react"

import "./App.css"
import Box from "./components/Box"
import DATA from "./utils/data"
function App() {
  const [currentIndex, setcurrentIndex] = useState(1)
  return (
    <div className="App">
      <h1>Our Reviews</h1>
      <div className="box">
        {DATA.filter((data) => data.id == currentIndex).map((data) => (
          <Box
            name={data.name}
            job={data.job}
            img={data.img}
            description={data.description}
            setcurrentIndex={setcurrentIndex}
            currentIndex={currentIndex}
            total={DATA.length}
          />
        ))}
      </div>
    </div>
  )
}

export default App
