import { validationResult } from "express-validator"
import User from "../utils/userSchema.mjs"
import  bcrypt from "bcrypt"

export const registerController= async (req,res)=>{
    const {username,password,email}=req.body 
    const result = validationResult(req)
    if(!result.isEmpty()){
        return res.status(400).json({result})
    }
    try{
        const existingEmail=await User.findOne({email})
        const existingUser=await User.findOne({username})
        if(existingUser || existingEmail ){
            return res.status(404).json({message:'boyle bir kullanici var'})
        }
        const passwordHash =await bcrypt.hash(password,10)
        const newUser = new User({
            username,
            email,
            password:passwordHash
        })
        const saveUser = await newUser.save()
        if(saveUser){
            return res.status(201).json({username,email})
        }
        
    }catch(err){
        return res.status(404).json({message:'fatal error'})
    }
}