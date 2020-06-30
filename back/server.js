// require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const app = express()

const { PORT, DB_URL } = require('./config')
const blogController = require('./blog/controller')

// allow requests from our client
const corsOpts = {
  origin: '*',
  methods: [
    'GET',
    'POST',
  ],
  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// app.use(cors())

// Set up routes for static resources
// app.use('/', express.static(__dirname + '/public'));
// app.use('/room', express.static(__dirname + '/public'));
// app.use('/login', express.static(__dirname + '/public'));
// app.use('/conference', express.static(__dirname + '/public'));
// app.use('/js', express.static(__dirname + '/public/js'));
// app.use('/static', express.static(__dirname + '/public/static'));
// app.use('/static/css', express.static(__dirname + '/public/static/css'));
// app.use('/static/js', express.static(__dirname + '/public/static/js'));
// app.use('/static/media', express.static(__dirname + '/public/static/media'));
// Allow the app to accept JSON on req.body
app.use(express.json())

// This is the endpoint that is hit from the onSubmit handler in Landing.js
// The callback is shelled off to a controller file to keep this file light.
app.post('/blog', blogController.collectBlog)
// Catch all to handle all other requests that come into the app.
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' })
})

// Connecting the database and then starting the app.
mongoose.connect(DB_URL, {
	useCreateIndex: true,
	useNewUrlParser: true,
  useFindAndModify: false
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});

require('http').createServer(app).listen(PORT);
console.log("Http server is running on Port: " + PORT)