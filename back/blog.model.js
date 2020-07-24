const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Data we need to collect/confirm to have the app go.
const fields = {
  blogTitle: {
    type: String
  },
  blogDescription: {
    type: String
  },
  blogImage: {
    type: String
  },
  blogOtherImage: {
    type: String
  },
  curDate: {
    type: String
  }
}

// One nice, clean line to create the Schema.
const blogSchema = new Schema(fields)

module.exports = mongoose.model('blog', blogSchema)