import React, { useState } from "react"
import { data } from "../../../data"

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const handleRemove = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div className="item" key={id}>
            {name} <button onClick={() => handleRemove(id)}>remove</button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Remove All
      </button>
    </>
  )
}

export default UseStateArray
