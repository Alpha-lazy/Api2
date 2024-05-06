const mongoose = require('mongoose')

const connectDB = async () => {
    try {
     await mongoose.connect("mongodb+srv://Anish:Anish%402007@cluster0.6c1gzun.mongodb.net/songs2")
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

module.exports = connectDB