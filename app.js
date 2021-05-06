const express = require("express");
const mongoose = require("mongoose");
const app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0.7b4qe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Mongo DB connection setup // 
//const mongodb = require('mongodb');
//mongodb.connect("mongodb+srv://admin:"+process.env.MONGOS_ATLAS_PW+"@cluster0.7b4qe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  //useMongoClient: true
//});


app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
//mongoose.connect(client);

const homeRoute = require('./api/routes/home');
const aboutRoute = require('./api/routes/about');
const vegRoute = require('./api/routes/vegetable');
const tmRoute = require('./api/routes/testimonial');
const ctRoute = require('./api/routes/contact');
const demoRoute = require('./api/routes/demo');

app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/vegetable", vegRoute);
app.use("/testimonial", tmRoute);
app.use("/contact", ctRoute);
app.use("/demo",demoRoute);
module.exports = app;
