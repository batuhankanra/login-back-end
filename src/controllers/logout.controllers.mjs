

export const logoutController = (req,res)=>{
    const token =req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(400).json({message:'token gerekli '})
    }
     res.json({ message: 'Başarıyla çıkış yapıldı' ,token});

}