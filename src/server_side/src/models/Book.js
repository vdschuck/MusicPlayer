const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const Media = require('./Media');

mongoose.pluralize(null);

const BookSchema = Media.discriminator(
  'Book',
  new Schema({
    pageNumber: Number,
  }, {
    collection: 'Book'
  }),
);
module.exports = model('Book', BookSchema);
