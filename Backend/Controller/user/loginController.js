
import userModel from "../../Models/user/userModel.js";
import bcrypt from 'bcrypt'
import { tokenGenerate } from "../../Utils/token.js";

const loginController = function (req, res) {

  let singleUser = userModel.findOne({email:req.body.email})

   if(singleUser){
      if(bcrypt.compareSync(req.body.password, singleUser.password)){

        res.status(201).json({
          msg:"successfully login",
        },
        {
          _id:singleUser._id,
          name:singleUser.name,
          email:singleUser.email,
          isAdmin:singleUser.isAdmin,
          token:tokenGenerate(singleUser)
        }
        )
      }
      else{
        res.status(401).json({
          msg:"Login Faild",
        })
      }
   }

}

export default loginController


