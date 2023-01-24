import dotenv from 'dotenv'      //Always call dotenv file at the top
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectDB.js'
import userRoutes from './routes/userRoutes.js'
const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

//Cors Policy
app.use(cors())

//Database Connection
connectDB(DATABASE_URL)

//JSON
app.use(express.json())

//Load Routes
app.use("/api/user",userRoutes)



app.listen(port,()=>{
    console.log("Listening At Port 8000")
})