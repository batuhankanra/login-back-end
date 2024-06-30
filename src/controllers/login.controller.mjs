import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../utils/userSchema.mjs"


export const loginController = async(req,res)=>{
    const {username,password}=req.body

    try{
        const user = await User.findOne({username})
        if(!user){
            return res.status(401).json({message:'kullanici adi hatali'})
        }
        const match = await bcrypt.compare(password,user.password)
        if(!match){
            return res.status(401).json({message:'sifre hatali'})
        }
        const token =jwt.sign({id:user.__id,username:user.username},process.env.SECRET_KEY,{expiresIn:'1d'})
        return res.status(200).json({message:'giris basarili',username,token})

    }catch (err){
        res.status(401).json({message:'fatal error',err})
    }

}
