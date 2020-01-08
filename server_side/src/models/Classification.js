const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.pluralize(null);

const ClassificationSchema = new Schema(
  {
    media: { type: Schema.Types.ObjectId, ref: 'Media' },
    value: { type: Number, required: true },
    doneBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
    collection: 'Classification'
  },
);
module.exports = model('Classification', ClassificationSchema);
