
// ZOKjxlzhJBph5g8l
import mongoose from "mongoose";


const dbConnection = async() =>{
    await mongoose.connect(process.env.DB).then(()=>{
        console.log('DB Connected');
        
    });
}

export default dbConnection