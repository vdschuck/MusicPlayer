const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const UsersValidator = require('../models/validators/User');

mongoose.set('useCreateIndex', true);
mongoose.pluralize(null);

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true, maxlength: 255, validate: UsersValidator.validateDefaultCharacterLength.bind(this, 255) },
    lastName: { type: String, required: true, mamaxlengthx: 255, validate: UsersValidator.validateDefaultCharacterLength.bind(this, 255) },
    email: {
      type: String,
      required: true,
      max: 255,
      lowercase: true,
      validate: UsersValidator.validateEmail.bind(this)
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      // maxlength: 30,
      // validate: UsersValidator.validatePasswordLength.bind(this)
    },
    tokens: [{
      token: {
        type: String,
        required: true,
      }
    }],
    university: { type: Schema.Types.ObjectId, ref: 'University' },
    account: { type: Schema.Types.ObjectId, ref: 'Account' },
    library: { type: Schema.Types.ObjectId, ref: 'Library' },
    role: { type: String, default: 'academic' },
    active: { type: Boolean, default: true },
    lastLoginDate: Date,
  },
  {
    timestamps: true,
    collection: 'User'
  },
);

UserSchema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 6);
  }
  next();
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  // Hash the password before saving the user model
  const user = this;
  if (user._update && user._update.password) {
    user._update.password = await bcrypt.hash(this._update.password, 6);
  }
  next();
});

module.exports = model('User', UserSchema);
