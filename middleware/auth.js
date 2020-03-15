var jwt = require('jsonwebtoken');
const key = process.env.PRIVATE_KEY;

module.exports = function (req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, key);
        req.user = decoded;
        next();
    }catch (ex) {
        res.status(400).send('Invalid token');
    }
    
}