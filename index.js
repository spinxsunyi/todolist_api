const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
}) 

database.once('connected', ()=>{
    console.log('connected database');
})

const app = express();
app.use(express.json());
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Set EJS as view engine
app.set('view engine', 'ejs');

// Importing all the routes
const apiRoute=require('./routes/apiRoute')
const indexRoute=require("./routes/indexRoute")

app.use('/api',apiRoute);
app.use('/',indexRoute);

app.listen(3001, ()=>{
    console.log(`server started at 3001`)
})