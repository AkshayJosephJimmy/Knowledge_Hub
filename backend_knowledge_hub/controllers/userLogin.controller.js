
import userModel from "../models/users.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function userLogin(req,res){

    const {email,password}=req.body;

    const targetUser=await userModel.findOne({email:email,password:password})

        if(!targetUser){
            
            return res.status(404).json({message:"User not found"})
        }
 
        let token= jwt.sign({id:targetUser._id},"secretkey",{expiresIn:'1h'})
            
           
            return res.status(200).json({message:"User logged in successfully",user:targetUser,token:token})
            
       
    


}
