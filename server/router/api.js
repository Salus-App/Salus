//import controllers
const userController = require('../controller/userController')
const apiController = require('../controller/apiController')
const express = require('express');
const router = express.Router();


//get user
router.post('/',
  userController.createUser,
  userController.getUser,
  (req, res) => res.status(200).json(res.locals)
);

//get music
router.get('/music',
  apiController.getToken,
  apiController.getSearchPlaylist,
  apiController.getPlaylist,
  (req, res) => res.sendStatus(200).json()
)

//get podcasts
router.get('/podcasts',
  apiController.getToken,
  apiController.getSearchShow,
  apiController.getShowEpisodes,
  (req, res) => res.sendStatus(200).json(res.locals.showEpisodes)
)

//export
module.exports = router;