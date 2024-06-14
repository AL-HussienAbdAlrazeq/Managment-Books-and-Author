import { Router } from "express";
import { createAuthor, deleteAuthorById, getAllAuthors, getAuthorsById, updateAuthorById } from "./author.controller.js";


const authorRouter = Router()

authorRouter.post('/' , createAuthor)
authorRouter.get('/' , getAllAuthors)
authorRouter.get('/:id' , getAuthorsById)
authorRouter.patch('/:id' , updateAuthorById)
authorRouter.delete('/:id' ,deleteAuthorById)



export default authorRouter