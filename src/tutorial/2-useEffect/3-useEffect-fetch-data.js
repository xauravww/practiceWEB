import React, { useState, useEffect } from "react"

const url = "https://api.github.com/users"

const UseEffectFetchData = () => {
  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setData(data)
  }
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h2>fetch data</h2>
      <ul className="users">
        {data.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <p>
                <strong>{user.login}</strong>
                <br />
                {user.bio}
                <a href={user.html_url}>Profile</a>
              </p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
