//import controllers
const userController = require('../controller/userController')
const apiController = require('../controller/apiController')
const express = require('express');
const router = express.Router();


//get user
router.post('/',
  userController.createUser,
  userController.getUser,
  (req,res) => res.status(200).json(res.locals)
);

//get music
router.get('/music', 
  // apiController.getSearchPlaylist,
  // apiController.getPlaylist,
 (req,res) => res.sendStatus(200).json({})
)

//get podcasts
router.get('/podcasts', 
  // apiController.getSearchShow,
  // apiController.getShows, 
  // apiController.getShowEpisodes, 
  // apiController.getShows,
  (req,res) => res.sendStatus(200).json({})
)

//export
module.exports = router;