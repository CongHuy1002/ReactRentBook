const Genres = require('../model/Genres');
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
}

module.exports = new genreController();
