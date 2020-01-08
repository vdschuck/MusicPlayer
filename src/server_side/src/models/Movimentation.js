const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.pluralize(null);

const MovimentationSchema = new Schema(
  {
    value: { type: Number, required: true },
    seller: { type: Schema.Types.ObjectId, ref: 'User' },
    buyer: { type: Schema.Types.ObjectId, ref: 'User' },
    media: { type: Schema.Types.ObjectId, ref: 'Media' },
    description: String,
  },
  {
    timestamps: true,
    collection: 'Movimentation'
  },
);
module.exports = model('Movimentation', MovimentationSchema);
