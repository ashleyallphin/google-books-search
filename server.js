// =========================
const color = require('colors-cli/toxic');
const morgan = require ("morgan");
const express = require("express");
const path = require('path');
const dotenv = require ('dotenv');
dotenv.config();


// =========================
// connect to the database via mongoose
const mongoose = require("mongoose");
  //to circumvent deprecation warnings
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useCreateIndex', true);

var db = process.env.MONGODB_URI
mongoose.connect(db)
.then(() => console.log(`Successfully connected to MongoDB.`.x204 + 
`\n+++++++++++++++++++++++++++++++++++++++++\n`.x141))
mongoose.connection.on('error', err =>
console.log(`Error connectiong to MongoDB: ${err.message}`.x196));


// =========================
// invoke express
const app = express();
// define routes
const bookRoutes = require("./routes/books-routes");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });


// =========================
app.use(morgan('dev'));
app.use(bookRoutes);


// =========================
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`\n+++++++++++++++++++++++++++++++++++++++++`.x141 +
    `\nApp listening on `.x154 + `http://localhost:${PORT}`.x43.underline + `.`.x154);
});

