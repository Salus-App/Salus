const { resolvePath } = require('react-router-dom');
const db = require('../model/userModel');

const userController = {};

// //create user
 userController.createUser = (req, res,next) => {
    
    (err, user) => {
        if(err) {
            return next({
                log:`userController.createUser: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
                message: {err: 'Error occured in userController.createUser. Check server logs for more info'}
            });
        }
        const parsed = JSON.parse(user);
        res.locals.user = parsed.results
        return next();
    }
 };

//get user
userController.getUser = (req, res, next) => {
    return next();
}

module.exports = userController;