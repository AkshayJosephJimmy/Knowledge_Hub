import jwt from 'jsonwebtoken';



 export function JwtAuthen(req,res,next){



    const token =req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    try{
    const decoded=jwt.verify(token,'secretkey')
    req.userId=decoded.id;

    next();
    }
    catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }
}