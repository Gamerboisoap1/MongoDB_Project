const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Replace your existing local MongoDB connection string with the MongoDB Atlas connection string
const atlasUri = 'Put ur connection string';

mongoose.connect(atlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error in database connection:(check params and api)', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB Atlas(nice job :D) ');
});

console.log(__dirname);

app.post("/sign_up", (req, res) => {
  var name = req.body.name;
  var age = req.body.age;
  var tell = req.body.tell;
  var like = req.body.like;
  var gender = req.body.gender;

  var data = {
    "name": name,
    "age": age,
    "tell": tell,
    "like": like,
    "gender": gender
  };

  db.collection('users').insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("record is in");
  });

  return res.sendFile(__dirname + '/done.html');
});

app.get("/", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": '*'
  });
  return res.sendFile(__dirname + '/website.html');
});

const port = process.env.PORT || 80; // Use the PORT environment variable if available, or default to 5500

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
