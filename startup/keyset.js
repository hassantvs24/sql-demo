const key = process.env.PRIVATE_KEY;
module.exports = function (){

    if(!key){//JWT Exception check
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
    }
}