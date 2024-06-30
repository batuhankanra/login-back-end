import express from 'express'
import { authMiddleWare } from '../middleware/authmiddlewera.mjs'

export const productRout=express.Router()


productRout.get('/profile',authMiddleWare,(req,res)=>{
    res.status(200).json({message:'profile bilgileri',user:req.user})
})