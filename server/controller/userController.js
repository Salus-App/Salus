const { user } = require('pg/lib/defaults');
const { resolvePath } = require('react-router-dom');
const db = require('../model/userModel');

const userController = {};

// //create user
 userController.createUser = (req, res,next) => {
     const userID = [req.body.user]
     const userSQL = `SELECT user_id FROM users`
    db.query(userSQL, user, (err, result) => {
        if(userID) {     
         return next(); 
    }
    if(err){
     return next({message : 'Error in userController.createuser'});
    } 
        res.locals.user = result.rows[0];
        next();
    })
 };

//get user
userController.getUser = (req, res, next) => {
    const id = req.user.id;
    const userSQL = `SELECT user_id FROM users`
    db.query(userSQL, user, (err, result) => {
        return next(id)
    })

}




// tarWarsController.getSpecies = (req, res, next) => {
//     // console.log('req.params', req.params);
//     // console.log('req.query', req.query);
//     const speciesID = [req.query.id];
//     const queryEntry = 
//       `SELECT planets.name as homeworld, species.*
//       From planets RIGHT OUTER JOIN species
//       ON species.homeworld_id = planets._id WHERE species._id = $1`;
//       //req.query.id;
//     db.query(queryEntry, speciesID,  (err, result) => {
//       // console.log(result.rows[0])
//       if(err) {
//         next({message: 'getSpecies not working'});
//       }
//       res.locals = result.rows[0];
//       next();
//     });
//   };

// module.exports = userController;