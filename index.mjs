import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import { routes } from "./src/routes/auth.routes.mjs"
import { db } from "./src/utils/db.mjs"
import { productRout } from "./src/routes/product.routes.mjs"

dotenv.config()
const app=express()
const url =process.env.PORT
db
app.use(cors())
app.use(express.json())


app.use('/api/auth',routes)
app.use('/api',productRout)







app.listen(url,()=>{
    console.log("server is running ",url)
})