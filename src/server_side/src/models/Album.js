const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const EntityValidator = require('../models/validators/Entity');

mongoose.pluralize(null);

const AlbumSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 255, validate: EntityValidator.validateDefaultCharacterLength.bind(this, 255) },
    description: { type: String, required: true, maxlength: 255, validate: EntityValidator.validateDefaultCharacterLength.bind(this, 255) },
    medias: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
  },
  {
    timestamps: true,
    collection: 'Album'
  },
);
module.exports = model('Album', AlbumSchema);
