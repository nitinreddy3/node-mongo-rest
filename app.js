const express = require('express')
const mongoose = require('mongoose');
require('dotenv/config')
const app = express()


//Import routes
const postsRoute = require('./routes/posts')

app.use('/posts',postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send("Welcome to the home")
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { 
useNewUrlParser: true, useUnifiedTopology:true  
}, () => {
    console.log("Connected to the DB")
})

app.listen(5000, () => {
    console.log("Listening on port 5000")
});