const mongoose = require('mongoose')
const URI = 'mongodb://localhost:27017/contact'

const connectToMongo = () =>{
    mongoose.connect(URI)
    .then(()=>console.log('MongoDB Connected'))
}

module.exports =connectToMongo