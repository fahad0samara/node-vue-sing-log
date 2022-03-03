const express = require('express');
const router = express.Router();
const mongoose = require('../model/mong')
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
    if(!userfind) return res.status(400).send('user alrede regestrit')
const data =await bcrypt.compare(req.body.password,userfind.password)
if(!data) return res.status(400).send('your password is incorrect')
   res.send('user regestrit')
}catch(err){
    next(err);
}
})


module.exports = router;