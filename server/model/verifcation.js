const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb+srv://fahad:fahad@cluster0.zobfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('connection ');
    }).catch(err => console.log(err));
const verifcation = new mongoose.Schema({
    verifcation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    token: { type: String, required: true },
    createdAt: {
        type: Date, expires: 36000,
        default: Date.now()
    }

})

module.exports = mongoose.model("verifation", verifcation)