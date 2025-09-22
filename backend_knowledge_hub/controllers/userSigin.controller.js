import userModel from "../models/users.model.js";

export async function userSignin(req,res){

const {name,email,password}=req.body;

if(!name || !email || !password){
    return res.status(400).json({message:"All fields are required"})
}

const existingUser=await userModel.findOne({email:email})
if(existingUser){
    return res.status(400).json({message:"User already exists",email:existingUser.email})
}


 const newUser =  await userModel.create({name,email,password});
 console.log(newUser)
 return res.status(201).json({message:"User created successfully",user:newUser})










}