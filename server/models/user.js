const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true,
    },
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
});

const User = module.exports = mongoose.model('User', UserSchema);