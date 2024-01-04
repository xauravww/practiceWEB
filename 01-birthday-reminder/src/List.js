import React from "react"

const List = ({ id, name, age, image, handleSingleRemove }) => {
  return (
    <div className="person">
      <img src={image} alt="" />
      <div className="about">
        <h3 className="name">{name}</h3>
        <p className="age">{age}</p>
      </div>
      <button onClick={() => handleSingleRemove(id)}>Remove</button>
    </div>
  )
}

export default List
