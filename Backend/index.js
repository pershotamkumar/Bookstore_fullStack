import express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

//middlware
app.use(cors())
app.use(express.json())

//routes import
import bookRoutes from './Route/book.route.js'; 
import userRoutes from './Route/user.route.js'

//MONGO CONNECTION 
try {
    mongoose.connect(process.env.MONGOURL);
    console.log("mongodb is connected !")

}
catch (error) {
    console.log(error)
}

//routes 
app.use('/book',bookRoutes)
app.use("/user",userRoutes)
app.use("/login",userRoutes)

app.listen(port, () => {
    console.log(`server is running on ${port} `)
})