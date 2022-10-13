//requires
const express = require("express"); //Para crear las APIS
const mongoose = require("mongoose"); //Para interactuar con mongo
const colors = require("colors"); //Para visualizar mejor la consola
const morgan = require("morgan"); //Para saber quien llama a las APIS
const cors = require("cors"); //Para configurar politicas

require('dotenv').config();

//instances
const app = express();

//express config
app.use(morgan("tiny"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

//express routes
app.use("/api", require("./routes/devices.js"));
app.use("/api", require("./routes/users.js"));
app.use("/api", require("./routes/emqxauthrules.js"));
app.use("/api", require("./routes/dataprovider.js"));
app.use("/api", require("./routes/webhooks.js"));
app.use("/api", require("./routes/datareports.js"))

module.exports = app;

//listener
app.listen(process.env.API_PORT, () => {
  console.log("API server listening on port " + process.env.API_PORT);
});

//Mongo Connection
const mongoUserName = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDatabase = process.env.MONGO_DATABASE;

var uri =
  "mongodb://" +
  mongoUserName +
  ":" +
  mongoPassword +
  "@" +
  mongoHost +
  ":" +
  mongoPort +
  "/" +
  mongoDatabase;

  //mongodb://devuser:devpassword@localhost:27017/iot

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnidiedTopology: true,
  useNewUrlParser: true,
  authSource: "admin",
};

mongoose.connect(uri, options).then(
  () => {
    console.log("\n");
    console.log("******************************".green);
    console.log(" Mongo Successfully Connected!".green);
    console.log("******************************".green);
    console.log("\n");
  },
  (err) => {
    console.log("\n");
    console.log("URL: ".red)
    console.log(uri.red);
    console.log("\n");
    console.log("******************************".red);
    console.log("   Mongo Connection Failed!   ".red);
    console.log("******************************".red);
    console.log("\n");
  }
);
