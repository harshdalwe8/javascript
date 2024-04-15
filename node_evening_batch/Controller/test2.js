
const newTestEnc = {
    testFunction:(req,res,next) =>{
        console.log("req enc: " + req);
        // res.send('newTestEnc working');
        next();
    }
};

module.exports = newTestEnc;