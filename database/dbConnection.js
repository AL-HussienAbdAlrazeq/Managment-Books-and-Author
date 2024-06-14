import mongoose from "mongoose";


export const dbConnection =  mongoose.connect('mongodb://localhost:27017/managment_Books_and_Authors')
.then(()=>{
    console.log("Server is Running")
}).catch(()=>{
    console.log("DataBase is Failed");
})