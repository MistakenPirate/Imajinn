const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true
    },
    image:{
        public_id:{
            type: String
        },
        url:{
            type: String
        }
    },
    location:{
        type:String
    }
});

module.exports = mongoose.model('User', userSchema);
