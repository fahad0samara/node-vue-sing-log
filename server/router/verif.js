const express = require('express');
const router = express.Router();
const mongoose = require('../model/mong')
const verify = require('../model/verifcation')
const {isValidObjectId}= require('mongoose')

const { gettheootenumber, mailsend,email} = require('../utils/mail')
router.post('/', async (req, res, next) => {
    const { usrid, otp } = req.body
    if (!isValidObjectId(usrid)) return res.status(400).send('invalid user id')
    const data = await mongoose.findById(usrid)
    if (data.veried) return res.status(400).send('this acant is already verified')
    
    const token = await verify.findOne({ verifcation: data._id })
    if (!token) return res.status(400).send('soryy acant not verified')
    //  const ismach= await token.compareToken(otp)
    //  if(!ismach) return res.status(400).send('plasus provided verified')
    data.veried = true
    await verify.findByIdAndDelete(token._id)
    await data.save()
    mailsend().sendMail({
        from: '"fahad 😊" <fahad0samara@gmail.com>', // sender address
        to: data.user, // list of receivers
        subject: "new log in user", // Subject line

        html: 'wlacm '
      


    })
    res.send('success')
});


module.exports = router;