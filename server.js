const express = require("express");
const app = express();
const routes = require("./routes")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to mongo
const mongoose = require("mongoose");
  //to circumvent deprecation warnings
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useCreateIndex', true);
// If deployed, use the deployed database. Otherwise, use the local 'ringerHeadlines' database.
var db = process.env.MONGODB_URI || "mongodb://localhost/ringerHeadlines";

//tell mongoose to connect to the database
mongoose.connect(db, function(error) {
    if (error) {
    //log any errors to the console
    console.log("There was an error: + " + error);
    }
    else {
    //or log a success message to the console
    console.log("Mongoose connection created successfully.");
    }
});

app.use(routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log(`App listening on PORT https://localhost${PORT}`);
});

