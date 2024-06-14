import { Router } from "express";
import { createBooks, deleteBookById, getAllBooks, getBookById , updateBookById } from "./book.controller.js";


const bookRouter = Router()

bookRouter.post('/',createBooks)
bookRouter.get('/' , getAllBooks)
bookRouter.get('/:id' , getBookById)
bookRouter.patch('/:id' , updateBookById)
bookRouter.delete('/:id' , deleteBookById)

 export default bookRouter