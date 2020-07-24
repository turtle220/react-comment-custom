const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Data we need to collect/confirm to have the app go.
const fields = {
  blogId: {
    type: String
  },
  selfId: {
    type: Number
  },
  parentId: {
    type: Number
  },
  userName: {
    type: String
  },
  email: {
    type: String
  },
  avatarUrl: {
    type: String
  },
  content: {
    type: String
  },
  commentDate: {
    type: String
  },
  commentAllow: {
    type: Boolean
  }
}

// One nice, clean line to create the Schema.
const usercommentSchema = new Schema(fields)

module.exports = mongoose.model('usercomment', usercommentSchema)