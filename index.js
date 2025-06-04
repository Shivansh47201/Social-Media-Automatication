import express, { json } from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';

dotenv.config();

const app = express();
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
