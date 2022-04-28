import userModel from "../../Models/user/userModel.js";
import bcrypt from 'bcrypt'


const signupController = function (req, res) {
    const userSignup =  userModel({
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password, 10),
    });

    userSignup.save().then((docs)=>{
        res.send(docs)
    })
}

export default signupController