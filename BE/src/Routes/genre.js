const express = require('express');
const router = express.Router();
const genreController = require('../app/controllers/genreController');

router.get('/getGenre', genreController.getGenre);
router.post('/postGenre', genreController.postGenre);
<<<<<<< HEAD
=======
router.get('/:id', genreController.genresBook);
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
module.exports = router;
