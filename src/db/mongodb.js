import mongoose from "mongoose";

const dbConnection = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connected")
  } catch(error){
    console.log(error)
  }
}

export default dbConnection;