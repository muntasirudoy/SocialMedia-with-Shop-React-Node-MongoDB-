import express from "express";
import signupController from '../../Controller/user/signupController.js'
const signupRouter = express.Router()






signupRouter.post('/signup', signupController)


export default signupRouter