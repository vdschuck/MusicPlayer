const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.pluralize(null);

const FavoriteSchema = new Schema(
  {
    media: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    type: Number,
  },
  {
    timestamps: true,
    collection: 'Favorite'
  },
);
module.exports = model('Favorite', FavoriteSchema);
