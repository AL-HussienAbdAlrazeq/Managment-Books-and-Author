import mongoose , {Schema, model} from "mongoose";



const schema =  new Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    publishedDate:{
        type:Date,
        default:Date.now
    }
})

export const Book =  model("Book" , schema)