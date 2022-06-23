const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/db')

mongoose.connect("mongodb+srv://pleasure_house:pleasurehouse@clustermern.taca5.mongodb.net/simpleMern?retryWrites=true&w=majority")

// connectDB()

app.listen(3001, (req, res)=>{
    console.log(`Server running`)
})


