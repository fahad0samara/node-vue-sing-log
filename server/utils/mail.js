const nodemailer= require('nodemailer')
exports.gettheootenumber = () => {
    let otp=''
    for (let i = 0; i <=3   ; i++) {
        const name=Math.round(Math.random()*9)
    otp=otp+name
        
    }
    return otp
    
}
exports.mailsend=()=> nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f98962778dc3f2",
      pass: "a50bf0ea90aeb8"
    }
      });


    

