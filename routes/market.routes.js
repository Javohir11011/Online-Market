import express from "express"
import { createMarket, getAllMarket } from "../controllers/index.js"


export const marketRouter = express.Router()

marketRouter.get('/all', getAllMarket)
marketRouter.post('/new',createMarket)
