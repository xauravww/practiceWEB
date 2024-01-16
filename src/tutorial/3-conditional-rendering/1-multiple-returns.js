import { arrayOf } from "prop-types"
import React, { useState, useEffect } from "react"
const url = "https://api.github.com/users/QuincyLarsons"

const MultipleReturns = () => {
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then((data) => {
        setuser(data)
        setLoading(false)
      })
      .catch((error) => {
        //only work for network error
        setIsError(true)
        setLoading(false)
      })
  }, [])
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setuser] = useState("random user")
  if (loading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Loading Error</h2>
  }
  if (user) {
    return (
      <>
        <h2>{user.name}</h2>
      </>
    )
  }
}

export default MultipleReturns
