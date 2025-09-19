import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    teams:[{type:mongoose.Schema.Types.ObjectId,ref:'Team'}]
});

const userModel=mongoose.model('User',userSchema);

export default userModel;

