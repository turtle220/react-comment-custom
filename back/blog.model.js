const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Data we need to collect/confirm to have the app go.
const fields = {
  blogId: {
    type: Number
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  categories: {
    type: String
  }
}

// One nice, clean line to create the Schema.
const blogSchema = new Schema(fields)

module.exports = mongoose.model('blog', blogSchema)