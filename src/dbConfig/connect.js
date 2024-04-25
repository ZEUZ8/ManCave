import mongoose, { mongo } from "mongoose";

export async function Connect(){
    try{
        mongoose.connect(process.env.MONGO_URL)
        const connection = mongoose.connection;
        connection.on("connected",()=>{
            console.log("mongodb connected succesfully")
        })
        connection.on("error",()=>{
            console.log('MongoDB connection erorr. please make sure MongoDB is running')
            process.exit()
        })
    }catch(err){
        console.log(err,' error in the mongodb Connection')
    }
}