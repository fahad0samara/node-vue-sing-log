const express = require('express');
const router = express.Router();
const mongoose = require('../model/mong')
const bcrypt= require('bcrypt');
const verify = require('../model/verifcation')
const {gettheootenumber,mailsend}= require('../utils/mail')


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
    // here for new data fot the id 
    const otp=gettheootenumber()
    const verifydata = new verify({
        verifcation:data._id,
        token:otp
    })
    await verifydata.save()
    await data.save()
    mailsend().sendMail({
        from: '"fahad 👻" <fahad0samara@gmail.com>', // sender address
        to: data.user, // list of receivers
        subject: "very vif you email", // Subject line

        html: otp, // html body
    })
    res.send(data) 
}catch(err){
    next(err);
}
})


module.exports = router;