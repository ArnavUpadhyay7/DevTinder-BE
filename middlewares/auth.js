const jwt = require('jsonwebtoken');
const userModel = require('../src/models/user');
const SECRET_KEY = 'SECRET';

const userAuth = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).send("Please login");
    }
    else{
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await userModel.findOne({_id: decoded._id});
        if(!user){
            throw new Error("User not found");
        } 
        req.user = user;
        next();
    }
};

module.exports = {userAuth};