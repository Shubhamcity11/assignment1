require('dotenv').config()
const express    = require('express'),
      app        = express();
      port       = process.env.port || 3000,
      morgan     = require('morgan'),
      db         = require("./db"),
      country      = require("./models/country"),
      countryRoutes = require("./routes/country"),
{loadCsvIntoDb} = require("./utils/helpers");

app.use(express.json());
app.use(morgan('tiny'));

app.use(countryRoutes)
app.use((req, res, next) => {
    let error = new Error("Resource not found");
    error.status = 500;
    next(error)
})
//global error handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
        message: err.message || "Something went wrong"
    })
})

db.sync().then(() => {
    console.log("Connected to the database")
    app.listen(port, async () => {
        console.log('Server started on port: ' + port);

        //adding the data as soon as server starts
        loadCsvIntoDb().then(() => console.log("Data Loaded Succesfully"))
    })
})
.catch(err => {
    console.log(err)
})
