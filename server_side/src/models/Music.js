const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const Media = require('./Media');

mongoose.pluralize(null);

const MusicSchema = Media.discriminator(
  'Music',
  new Schema({
    duration: Number,
  }, {
    collection: 'Music'
  }),
);
module.exports = model('Music', MusicSchema);
