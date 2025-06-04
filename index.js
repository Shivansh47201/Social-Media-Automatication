import express from 'express'
import dotenv from 'dotenv';


//internal import files
import connectDB from './config/db.config.js';
import app from './app.js';

dotenv.config();


const PORT = process.env.PORT || 5020

// app.use(express(), json)

app.get('/', (req,res) =>{
  res.status(200).json({msg : `Hello I working`});
})






//Server connection

const start = async() =>{
  try{
     await connectDB(process.env.MONGO_URI)
  app.listen(PORT, () =>{
  console.log(`Server is running on http://localhost:${PORT}`)
})

  }catch(error){
    console.log(`Server has not connected`, error);
  }
}

start();
