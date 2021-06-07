const { Schema, model } = require('mongoose');
const crypto = require('crypto');

const User = new Schema({
  username: String,
  name: String,
  password: String,
  admin: {
    type: Boolean,
    default: false,
  },
});

User.statics.create = function (username, name, password) {
  const encrypted = crypto.createHmac('sha1', 'SECRET').update(password).digest('base64');
  const user = new this({
    username,
    name,
    password: encrypted,
  });

  return user.save();
};

User.statics.findOneByUsername = function (username) {
  return this.findOne({
    username,
  }).exec();
};

User.methods.verify = function (password) {
  const encrypted = crypto.createHmac('sha1', 'SECRET').update(password).digest('base64');
  return this.password === encrypted;
};

User.methods.assignAdmin = function e() {
  this.admin = true;
  return this.save();
};

module.exports = model('User', User);
