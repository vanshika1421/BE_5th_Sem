const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

UserSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('User', UserSchema);