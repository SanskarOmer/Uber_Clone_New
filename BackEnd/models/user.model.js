const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
        fullname:{
            type:String,
            required:true,
            minlength: [3, 'Name must be at least 3 characters long']
        },

        lastname:{
            type:String,
            minlength: [3, 'last name must be at least 3 characters long']
        },

        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is invalid');
                }
            }
        },

        password:{
            type:String,
            required:true,

        },

        socket:{
            type:String,
        },
        
    });