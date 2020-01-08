const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const Media = require('./Media');

mongoose.pluralize(null);

const PodcastSchema = Media.discriminator(
  'Podcast',
  new Schema({
    duration: Number,
  }, {
    collection: 'Podcast'
  }),
);
module.exports = model('Podcast', PodcastSchema);
