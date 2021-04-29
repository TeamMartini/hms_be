const { Schema, model } = require('mongoose');
const crypto = require('crypto');

const User = new Schema({
  username: String,
  password: String,
  admin: {
    type: Boolean,
    default: false,
  },
});

User.statics.create = function e(username, password) {
  const encrypted = crypto.createHmac('sha1', 'SECRET').update(password).digest('base64');
  const user = new this({
    username,
    encrypted,
  });

  return user.save();
};

User.statics.findOneByUsername = function e(username) {
  return this.findOne({
    username,
  }).exec();
};

User.methods.verify = function e(password) {
  const encrypted = crypto.createHmac('sha1', 'SECRET').update(password).digest('base64');
  return this.password === encrypted;
};

User.methods.assignAdmin = function e() {
  this.admin = true;
  return this.save();
};

module.exports = model('User', User);
