import jwt from "jsonwebtoken"
export const tokenGenerate=(user)=>{
   return jwt.sign({user},process.env.USER_AUTH_TOKEN,{
       expiresIn:"30d"
   })
}