const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Data we need to collect/confirm to have the app go.
const fields = {
  comment: {
    type: String
  },
  commenttitle: {
    type: String
  },
  commentdescription: {
    type: String
  },
  commentimage: {
    type: String
  },
  categories: {
    type: String
  }
}

// One nice, clean line to create the Schema.
const commentSchema = new Schema(fields)

module.exports = mongoose.model('comment', commentSchema)