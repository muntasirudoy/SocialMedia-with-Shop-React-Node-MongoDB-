import express from "express";
import loginController from '../../Controller/user/loginController.js'
const loginRouter = express.Router()





loginRouter.get('/login', loginController)





export default loginRouter