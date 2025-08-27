const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    mail:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: false,
    }
}, {timestamps: true}); 

module.exports = mongoose.model('User', userSchema);