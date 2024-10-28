import express from "express"
import dotenv from "dotenv"
import {marketRouter,  productRouter, usersRouter} from "./routes/index.js"


dotenv.config()

const app = express()
app.use(express.json())

app.use('/market', marketRouter)
app.use('/product', productRouter)
app.use('/users', usersRouter)



const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server ${PORT} running...`);
})

