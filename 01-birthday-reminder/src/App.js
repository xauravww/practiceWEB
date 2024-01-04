import React, { useState, useMemo } from "react"
import data from "./data"
import List from "./List"

function App() {
  const initialData = useMemo(() => data, []) 
  const [people, setPeople] = useState(initialData)

  const handleClearAll = () => {
    setPeople([])
  }

  const handleSingleRemove = (id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id))
  }

  return (
    <div className="container">
      <h1>{people.length} Birthdays Today</h1>
      {people.map(({ id, name, age, image }) => {
        return (
          <List
            key={id}
            id={id} // Pass the id to List component
            name={name}
            age={age}
            image={image}
            handleSingleRemove={handleSingleRemove}
          />
        )
      })}
      <button className="btn" onClick={handleClearAll}>
        Remove All
      </button>
    </div>
  )
}

export default App
