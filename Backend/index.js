import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config' // 
// all routes import start
import userRouter from './Routes/user/userRouter.js'
import dbConnection from './Config/database.js'
// all routes import end

const app = express()
dbConnection() //db connection call
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// all routes use start
app.use('/api/user',userRouter)
// all routes use end




app.listen(process.env.PORT,()=>{
    console.log("Server Connect")
})


