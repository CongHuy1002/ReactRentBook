const express = require('express');
const router = express.Router();
const genreController = require('../app/controllers/genreController');

router.get('/getGenre', genreController.getGenre);
router.post('/postGenre', genreController.postGenre);
module.exports = router;
