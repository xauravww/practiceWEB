const path = require("path")
const express = require("express")
const multer = require("multer")

const app = express()
const port = process.env.PORT || 3000

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads")
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage: storage })
app.set("views", path.resolve("./views"))
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.render("homepage")
})

app.post(
  "/upload",
  upload.fields([
    { name: "photo1", maxCount: 1 },
    { name: "photo2", maxCount: 1 },
    { name: "photo3", maxCount: 1 }
  ]),
  (req, res) => {
    res.send("File uploaded successfully")
  }
)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
