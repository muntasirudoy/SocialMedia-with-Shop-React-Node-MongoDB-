import express from "express";
import signupController from '../../Controller/user/signupController.js'
const signupRouter = express.Router()






signupRouter.get('/signup', signupController)


export default signupRouter