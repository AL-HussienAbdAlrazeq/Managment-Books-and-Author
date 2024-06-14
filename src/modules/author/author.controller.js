import {Author} from "../../../database/models/author/authors.models.js"



const createAuthor = async(req,res)=>{
  const author = await Author.insertMany(req.body)
  res.status(201).json({message:"Succsess" , author})
}




const getAllAuthors = async(req,res)=>{
   const authors = await Author.find().populate('books')
  res.status(200).json({message:"Succsess" , authors})
}




const getAuthorsById = async(req,res)=>{
    const authors = await Author.findById(req.params.id).populate('books')
   res.status(200).json({message:"Succsess" , authors})
 }


 
const updateAuthorById = async(req,res)=>{
    const book = await Author.findByIdAndUpdate(req.params.id , req.body , {new:true})
    res.json({message:"Updated" , book})
  }
  
  
  
  const deleteAuthorById = async(req,res)=>{
    await Author.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"Deleted"})
  }



export{
    createAuthor,
    getAllAuthors,
    getAuthorsById,
    updateAuthorById,
    deleteAuthorById
}