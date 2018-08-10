const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static("client/public"));
// Set up promises with mongoose
mongoose.Promise = global.Promise;

//----edit
// Mongo URI
const mongoURI = "mongodb://localhost/EHF";
const conn = mongoose.createConnection(mongoURI);
//----edit end

mongoose.connect( process.env.MONGODB_URI || mongoURI );

const routes = require("./controllers/ehfController");
const routeimg = require("./controllers/imgController");
app.use(routes);
app.use(routeimg);

//------------------------------------------------------------------------------
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
