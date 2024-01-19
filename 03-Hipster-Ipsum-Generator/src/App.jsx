import { useState } from "react"

import "./App.css"
import { Grid } from "react-loader-spinner"

function App() {
  const [paragraphToggle, setParagraphToggle] = useState(true)
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState([])
  const [inputData, setInputData] = useState("")

  const handleChange = (e) => {
    const value = e.target.value

    if (value === "paragraph") {
      setParagraphToggle(true)
    } else if (value === "sentence") {
      setParagraphToggle(false)
    }
  }
  const handleReset = () => {
    setLoader(false)
    setData([])
    setInputData("")
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoader(true)
    const amount = parseInt(inputData)
    let url = ""

    if (paragraphToggle) {
      url = `https://hipsum.co/api/?type=hipster-centric&paras=${amount}`
    } else {
      url = `https://hipsum.co/api/?type=hipster-centric&sentences=${amount}`
    }

    const res = await fetch(url)
    const data = await res.json()

    setData(data)
    setLoader(false)
  }

  return (
    <div className="container">
      <h1>
        Tired of <span>Lorem Ipsum</span>?
      </h1>
      <h2>Give us a try</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs-wrapper">
          <input
            type="number"
            id="amount"
            name="amount"
            min="1"
            max={paragraphToggle ? "10" : "100"}
            onChange={(e) => setInputData(e.target.value)}
            value={inputData}
            placeholder={paragraphToggle ? "1-10" : "1-100"}
            className="input"
          />

          <select name="type" id="" onChange={handleChange} className="select">
            <option value="paragraph" name="type">
              Paragraph
            </option>
            <option value="sentence" name="type">
              Sentence
            </option>
          </select>
        </div>
        <div className="btn-wrapper">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleReset}
          >
            Reset
          </button>
          <button type="submit" className="btn">
            Generate
          </button>
        </div>
      </form>

      {loader && (
        <div className="loader">
          <Grid color="#FF0000" height={80} width={80} />
        </div>
      )}

      {data.length > 0 && (
        <p className="paragraph">
          {data.map((item, index) => (
            <p key={index} className="paragraph-item">
              {item}
            </p>
          ))}
        </p>
      )}
    </div>
  )
}

export default App
