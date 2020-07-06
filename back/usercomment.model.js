const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Data we need to collect/confirm to have the app go.
const fields = {
  usercontent: {
    type: String
  },
  username: {
    type: String
  },
  userpicurl: {
    type: String
  },
  flag: {
    type: Boolean
  }
  
}

// One nice, clean line to create the Schema.
const usercommentSchema = new Schema(fields)

module.exports = mongoose.model('usercomment', usercommentSchema)