const Genres = require('../model/Genres');
<<<<<<< HEAD
=======
const Books = require('../model/Book');
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
class genreController {
  async postGenre(req, res, next) {
    try {
      const newGenre = new Genres(req.body);
      const saveGenre = await newGenre.save();
      res.status(200).json(saveGenre);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async getGenre(req, res, next) {
    try {
      const genres = await Genres.find().lean();
      console.log(genres);
      res.status(200).json(genres);
    } catch (err) {
      res.status(500).json(err);
    }
  }
<<<<<<< HEAD
=======
  async genresBook(req, res, next) {
    try {
      const genresBook = await Books.find({ genres: req.params.id }).lean();
      const addToCartAPI = process.env.addtocartAPI;
      console.log(genresBook);
      res.status(200).json({
        genresBook,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
}

module.exports = new genreController();
