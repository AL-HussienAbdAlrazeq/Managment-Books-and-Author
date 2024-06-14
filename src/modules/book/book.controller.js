
import { Book } from "../../../database/models/book/books.model.js"


const createBooks = async (req,res)=>{
  const book = await Book.insertMany(req.body)
res.status(201).json({message:"Success" , book})
}



const getAllBooks= async(req,res)=>{
   const book = await Book.find()
    res.status(200).json({book})
}



const getBookById =async (req,res)=>{
const book = await Book.findById({_id:req.params.id})
res.json({message:"Success" , book})
}



const updateBookById = async(req,res)=>{
  const book = await Book.findByIdAndUpdate(req.params.id , req.body , {new:true})
  res.json({message:"Success" , book})
}



const deleteBookById = async(req,res)=>{
  await Book.findByIdAndDelete(req.params.id)
  res.status(200).json({message:"Deleted"})
}


export{
    createBooks,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById
}