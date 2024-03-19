const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-updater');
// var mongooseDelete = require('mongoose-delete');
const bookSchema = new Schema(
  {
<<<<<<< HEAD
    name: { type: String, maxLength: 255, require: true},
    // thêm giá nhập & đọc trước
    price: { type: Number,require:true},
    description: { type: String,require:true },
    author: {type: mongoose.Schema.Types.ObjectId,ref: 'author'},
    genres: { type: [String],require:true},
    images: [{ type: String, maxLength: 255, require:true }],
    pdfFile: {type: String},
=======
    name: { type: String, maxLength: 255, require: true },
    // thêm giá nhập & đọc trước
    price: { type: Number, require: true },
    description: { type: String, require: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'author' },
    genres: { type: mongoose.Schema.Types.ObjectId, ref: 'genre' },
    images: [{ type: String, maxLength: 255, require: true }],
    pdfFile: { type: String },
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
);

mongoose.plugin(slug);
const Books = mongoose.model('book', bookSchema);
<<<<<<< HEAD
module.exports = Books;
=======
module.exports = Books;
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
