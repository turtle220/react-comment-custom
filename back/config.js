exports.PORT = process.env.PORT || 3111

exports.DB_URL = process.env.NODE_ENV === 'production'
  ? process.env.DB_URL
  : 'mongodb://127.0.0.1:27017/samdivtech'

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;