const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());

const connectDB = require("./connectMongo");


const aulbum  = require("./aulbum.json")
const BookModel = require('./models/book.model')

const create = async() => {
 try {
  await connectDB()
  await BookModel.create(aulbum)
  console.log("created successfully");
 } catch (error) {
  console.log("Doesnot create");
 }
    
  
 
}

app.get("/api/song" , async(req,res)=>{
  res.status(200).json( await BookModel.find())
})
app.listen(80, async() => {
  console.log("Server is running on port  80");
  await create()
});
