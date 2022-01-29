const db = require('../model/userModel');

const userController = {};

// //create user
// userController.createUser = (req, res,next) => {

// };

//get user
userController.getUser = (req, res, next) => {
    return next();
}

module.exports = userController;
