const db = require('../model/userModel');

const userController = {};

// //create user
 userController.createUser = (req, res, next) => {
     const userID = [req.body.user]
     const userSQL = `SELECT user_id FROM users WHERE user_id = $1`
    db.query(userSQL, userID, (err, result) => {
        if(err){
            return next({message : 'Error in userController.createuser'});
           } 
        if (result.user_id) {     
         return next();    
        }
        const newUser = `INSERT INTO users (user_id) VALUES ($1)`
        db.query(newUser, userID, (err, result) => {
            return next();
        })
    })
 };

//get user
userController.getUser = (req, res, next) => {
    const userID = [req.body.user]
    const userSQL = `SELECT user_id FROM users WHERE user_id = $1`
    db.query(userSQL, userID, (err, result) => {
        if(err){
            return next({message : 'Error in userController.getuser'});
        } 
        res.locals.user = result;
        return next();
    })
}



 module.exports = userController;