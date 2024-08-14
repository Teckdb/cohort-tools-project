const express = require("express")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")

const PORT = 5005

const mongoose = require("mongoose")

const databaseName = 'cohort-tools-api'

const MONGO_URI = `mongodb://127.0.0.1:27017/${databaseName}`

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name
    console.log(`Connected to Mongo! Database name: "${dbName}"`)
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err)
  })

const app = express()


app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
a

app.get('/api/students', (req, res) => {
  res.json(students)
})

app.get('/api/cohorts', (req, res) => {
  res.json(cohortsData)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})