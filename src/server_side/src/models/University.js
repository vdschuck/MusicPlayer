const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const EntityValidator = require('../models/validators/Entity');

mongoose.pluralize(null);

const UniversitySchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 255, validate: EntityValidator.validateDefaultCharacterLength.bind(this, 255) },
    country: { type: String, required: true, maxlength: 255, validate: EntityValidator.validateDefaultCharacterLength.bind(this, 255) },
    state: { type: String, required: true, maxlength: 2, validate: EntityValidator.validateDefaultCharacterLength.bind(this, 2) },
    address: { type: String, maxlength: 255, validate: EntityValidator.validateDefaultCharacterLength.bind(this, 255) },
  },
  {
    timestamps: true,
    collection: 'University'
  },
);
module.exports = model('University', UniversitySchema);
