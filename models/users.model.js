import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
  },
 password: {
    type: String,
    require: true,
  },
  date: 
  { 
    type: Date, 
    default: Date.now,
  },
})

