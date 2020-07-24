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

// Allow the app to accept JSON on req.body
app.use(express.json())

// Handle Comment
app.post('/saveComment', blogController.setComment)
app.post('/getBlogAndComment', blogController.getBlogAndComment)
app.post('/getCommentListWithBlogName', blogController.getCommentListWithBlogName)
app.post('/updateCommentAllow', blogController.updateCommentAllow)
// app.post('/reply', blogController.collectUserComment)

// Handle Admin
app.post('/getBlogList', blogController.getBlogList)
app.post('/insertBlog', blogController.insertBlog)
app.post('/updateBlog', blogController.updateBlog)


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