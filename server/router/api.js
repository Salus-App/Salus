//import controllers
const userController = require('../controller/userController')
const express = require('express');
const router = express.Router();

router.get('/',
  userController.getUser,
  (req,res) => res.status(200).json({})
);



//export
module.exports = router;
