import mongoose from 'mongoose';

const connectDB = async(URI) =>{
  try{
     const conn = await  mongoose.connect(URI)
   .then(() => console.log("Connected to MongoDB"))
  }catch(error){
    console.log(`Error connecting to MongoDB `, error)
  }
   
}

export default connectDB;