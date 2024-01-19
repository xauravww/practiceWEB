import express from "express"
import cors from "cors"
import fetch from "node-fetch"

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

app.get("/api/hipster", async (req, res) => {
  const { type, paras, sentences } = req.query
  const url = `http://hipsum.co/api/?type=hipster-centric&sentences=3`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
