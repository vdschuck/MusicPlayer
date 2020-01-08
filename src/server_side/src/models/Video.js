const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const Media = require('./Media');

mongoose.pluralize(null);

const VideoSchema = Media.discriminator(
  'Video',
  new Schema({
    duration: Number,
  }, {
    collection: 'Video'
  }),
);
module.exports = model('Video', VideoSchema);
