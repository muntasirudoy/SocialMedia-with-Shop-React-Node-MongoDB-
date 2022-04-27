import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config' // 
// all routes import start
import loginRouter from './Routes/user/loginRoute.js'
import signupRouter from './Routes/user/signupRoute.js'
// all routes import end

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// all routes use start
app.use('/',loginRouter)
app.use('/',signupRouter)
// all routes use end




app.listen(process.env.PORT,()=>{
    console.log("Server Connect")
})


