const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fahad:fahad@cluster0.zobfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log('connection ');
}).catch(err => console.log(err));
const mongodb=new mongoose.Schema({
    user: { type: String},
    veried: { type:Boolean, required: true, default: false},
    password: { type: String,required: true}},

    
  {timestamps: true}
    )
module.exports=mongoose.model("user",mongodb)