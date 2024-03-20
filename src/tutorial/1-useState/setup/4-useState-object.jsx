import React, { useState } from "react"

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Saurav",
    age: 30,
    message: "Hello"
  })

  const handleUpdateMessage = () => {
    setPerson({
      ...person,
      message: "Goodbye"
    })
  }

  return (
    <>
      <h2 className="item">{person.name}</h2>
      <h2 className="item">{person.age}</h2>
      <h2 className="item">{person.message}</h2>
      <button className="btn" onClick={handleUpdateMessage}>
        Update Message
      </button>
    </>
  )
}

export default UseStateObject
