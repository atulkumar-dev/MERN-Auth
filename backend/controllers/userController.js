import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export  async function handleSignupController(req,res){
   const {username, email, password} = req.body;

   if(!username || !email || !password){
    res.status(400).send("All fields are required");
   }

   const hashedPassword = await bcrypt.hash(password, 10)

   //creates a new instance of user collection document
   const newUser = User({
    username, email, password: hashedPassword
   })

   try{
    const savedUser = await newUser.save();
    if(savedUser){
        res.status(200).json({message:"User Signup Successful", success:true});
    }
   }
   catch(err){
    res.status(400).json({message:"Error in user signup", success:false})
   }

}