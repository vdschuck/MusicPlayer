const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

mongoose.pluralize(null);

const AccountSchema = new Schema(
  {
    currentAmount: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'Account'
  },
);
module.exports = model('Account', AccountSchema);
