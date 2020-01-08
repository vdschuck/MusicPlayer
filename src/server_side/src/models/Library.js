const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.pluralize(null);

const LibrarySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    media: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
  }, 
  {
    timestamps: true,
    collection: 'Library'
  }
);
module.exports = model('Library', LibrarySchema);
