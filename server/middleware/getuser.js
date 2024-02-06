var jwt = require("jsonwebtoken");
const jwt_sec = "Secret is a pass";
// this gives u the object of the particular person and we can go throught it later on
const getuser=(req,res,next)=>{
    const token=req.header('token');
    if(!token){
        res.status(401).send({error:"please authenticate using a vaild token"});
    }
    try {
        const data=jwt.verify(token,jwt_sec);
        req.userid=data._id;
        next();
    } catch (error) {
        res.status(401).send({error:"please authenticate using a vaild token"})
        
    }
}
module.exports = getuser;