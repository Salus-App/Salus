//import controllers
const userController = require('../controller/userController')
const express = require('express');
const router = express.Router();


//get user
router.get('/',
  userController.getUser,
  (req,res) => res.status(200).json({})
);

//get music
router.get('/api/music', 
  userController.getMusic,
 (req,res) => res.sendStatus(200).json({})
)

//get podcasts
router.get('/api/podcats', 
  userController.getMusic,
  (req,res) => res.sendStatus(200).json({})
)


//export
module.exports = router;