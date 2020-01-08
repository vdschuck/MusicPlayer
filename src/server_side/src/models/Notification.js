const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const EntityValidator = require('../models/validators/Entity');

mongoose.pluralize(null);

const NotificationSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true, maxlength: 1000, validate: EntityValidator.validateDefaultCharacterLength.bind(this, 1000) },
    enable: Boolean,
  },
  {
    timestamps: true,
    collection: 'Notification'
  },
);

module.exports = model('Notification', NotificationSchema);
