const userModels = require('../models/user.models');

module.exports.createUser = async ({ fullname, lastname, email, password }) => {
    if (!fullname || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = userModels.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });

    return user;
}