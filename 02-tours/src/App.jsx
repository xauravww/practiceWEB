import { useState, useEffect } from "react"

import "./App.css"

import Loader from "./components/Loader/Loader"
import CardsDashboard from "./pages/CardsDashboard/CardsDashboard"
function App() {
  const handleDeleteOne = (id) => {
    console.log("Deleting tour with id:", id)
    setTours(tours.filter((tour) => tour.id !== id))
  }

  const [tours, setTours] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [isError, setisError] = useState(false)
  useEffect(() => {
    console.log("refreshing use effect")
    fetch("https://course-api.com/react-tours-project").then((res) => {
      if (res.status >= 200 && res.status < 300) {
        res.json().then((data) => {
          setTours(data)
          setisLoading(false)
        })
      } else {
        setisLoading(false)
        setisError(true)
        throw new Error("Failed to fetch tours")
        // console.log("Error fetching tours")
      }
    })
  }, [])

  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <h2>Error...</h2>
  }
  if (!isLoading) {
    return (
      <>
        <div className="container">
          <h2 className="container-header">Our Tours</h2>
        </div>
        <CardsDashboard tours={tours} handleDeleteOne={handleDeleteOne} />
        {tours.length === 0 && (
          <div className="no-tours">
            <h2>No Tours Found</h2>
            <button onClick={() => window.location.reload()}>Refresh</button>
          </div>
        )}
      </>
    )
  }
}

export default App
