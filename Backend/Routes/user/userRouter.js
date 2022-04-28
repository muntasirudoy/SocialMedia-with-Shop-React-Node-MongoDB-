import express from "express";
import loginController from '../../Controller/user/loginController.js'
import signupController from '../../Controller/user/signupController.js'
const userRouter = express.Router()








userRouter.post('/signup', signupController)

userRouter.get('/login', loginController)



export default userRouter