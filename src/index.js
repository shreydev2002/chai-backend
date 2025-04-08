
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()









/*
import express from "express"
const app = express()

// function connectDB(){}   // Function like this can also be used but
// connectDB()              // we will take better approach

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error            
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch(error){
        console.error("ERROR: ", error)
        throw error
    }
} )()
    */