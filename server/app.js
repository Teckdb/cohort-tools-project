const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const PORT = 5005;
const students = require('./students.json')
const cohortsData = require("./cohorts.json")

const app = express();


app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/api/students', (req, res) => {
  res.json(students)

})


app.get('/api/cohorts', (req, res) => {
  res.json(cohortsData)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});