const dotenv = require("dotenv") // * as  from 'dotenv'
const mongoose = require('mongoose')  

dotenv.config({ encoding: 'utf8' })
const config = {
    NODE_ENV: process.env.NODE_ENV || 'developement',
    PORT: process.env.PORT || 5700,
    MONGODB_URI:process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pokemon',
    JWT_SECRET: process.env.JWT_SECRET
}
mongoose.connect(config.MONGODB_URI)
module.exports = { db:mongoose.connection, config }