const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const config = require('config')
const PORT = config.get('port') || 7777
app.use(cors())
app.use(express.static('static'))
app.use(express.json())
app.use('', require('./routes/index.js'))
async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'))
    app.listen(PORT, () => console.log(`server connected successfully ${PORT}`))
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()
