import express from "express"
import { getUsers , createUsers, putUsers, deleteUsers} from "../controllers/index.js"

export const usersRouter = express.Router()


usersRouter.get('/all',getUsers)
usersRouter.post('/new', createUsers)
usersRouter.put('/:id', putUsers)
usersRouter.delete('/:id', deleteUsers)