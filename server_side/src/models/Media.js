const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const MediaValidator = require('../models/validators/Media');

mongoose.pluralize(null);

const MediaSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 255, validate: MediaValidator.validateDefaultCharacterLength.bind(this, 255) },
    description: { type: String, required: true, maxlength: 1000, validate: MediaValidator.validateDefaultCharacterLength.bind(this, 1000) },
    price: { type: Number, required: true, validate: MediaValidator.validatePrice.bind(this) },
    category: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    author: { type: String, required: true, maxlength: 255, validate: MediaValidator.validateDefaultCharacterLength.bind(this, 255) },
    classification: { type: Schema.Types.ObjectId, ref: 'Classification' },
    content: Buffer,
    image: Buffer,
    isAvailable: Boolean,
    isApropriated: Boolean,
    isAvailableSince: Date
  },
  {
    timestamps: true,
    collection: 'Media'
  },
);

module.exports = model('Media', MediaSchema);
