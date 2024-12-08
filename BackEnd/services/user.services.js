const userModels = require('../models/user.models');

module.exports.createUser = async ({fullname, email, password}) => {
    if(!fullname || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = userModels.create({fullname, email, password});

    return user;
}