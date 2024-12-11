const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { use } = require('../app');


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: [3, 'Name must be at least 3 characters long']
    },

    lastname: {
        type: String,
        minlength: [3, 'last name must be at least 3 characters long']
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },

    password: {
        type: String,
        required: true,
        select: false,

    },

    socketId: {
        type: String,
    },

});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return token;
}

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;