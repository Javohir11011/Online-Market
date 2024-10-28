import express from "express"
import { getAllProduct, createProduct, putProduct , deleteProduct} from "../controllers/index.js"


export const productRouter = express.Router()

productRouter.get('/all', getAllProduct)
productRouter.post('/new',createProduct)
productRouter.put('/:id', putProduct)
productRouter.delete('/:id', deleteProduct)
