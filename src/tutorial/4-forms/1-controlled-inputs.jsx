import React, { useState } from "react"

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) {
      const userObj = {
        id: new Date().getTime().toString(),
        name: name,
        email: email
      }
      setUser((user) => {
        return [...user, userObj]
      })
      setName("")
      setEmail("")
    }
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [user, setUser] = useState([])

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            name="firstName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn">submit</button>
      </form>

      {user.map((item) => {
        return (
          <>
            <div className="item">
              <h4>
                {item.name}
              </h4>
              <p>{item.email}</p>
            </div>
          </>
        )
      })}
    </>
  )
}

export default ControlledInputs
