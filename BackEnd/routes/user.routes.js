const express = require('express');
const router = express.Router();
const { body } = require('express-validator'); 
const userController = require('../controller/user.controller');

router.post('/register', [
    body('fullname').isString().isLength({min:3}).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
]

,(req, res) => {
    userController.register(req,res);
});







modules.exports = router;