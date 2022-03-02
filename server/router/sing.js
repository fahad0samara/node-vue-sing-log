const express = require('express');
const router = express.Router();
const mongoose = require('./mong')
const bcrypt= require('bcrypt');


router.get('/',async function(req, res, next) {
    try{
        const data = await mongoose.find({})
        res.send(data)
    }catch(err){
        next(err);
    }
})
router.post('/',async (req, res, next)=>{
try{
    const userfind=await mongoose.findOne({user:req.body.user})
    if(userfind) return res.status(400).send('user alrede regestrit')
const salt = await bcrypt.genSalt(10)
const hashpassword= await bcrypt.hash(req.body.password, salt)
    const data=new mongoose(req.body)
    data.password=hashpassword
    const sava=await data.save()
    res.send(sava) 
}catch(err){
    next(err);
}
})


module.exports = router;