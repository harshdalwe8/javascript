
const newTest = {
    testFunction:(req,res,next) =>{
        console.log(req);
        res.send('working');
    }
};

module.exports = newTest;