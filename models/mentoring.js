const { Schema, model } = require('mongoose');

const Mentoring = new Schema({
  roomNumber: Number,
  lender: String,
  capacity: Number,
  rentalTime: String,
  rental: { type: Boolean, default: false },
});

Mentoring.statics.create = function (lender, roomNumber, capacity, rentalTime) {
  const mentoring = new this({
    lender,
    roomNumber,
    capacity,
    rentalTime,
  });

  return mentoring.save();
};

Mentoring.statics.findOneByLender = function (lender) {
  return this.findOne({
    lender,
  }).exec();
};

Mentoring.statics.listMentoring = function () {
  return this.find({}).exec();
};

Mentoring.methods.reservation = function e() {
  this.rental = true;
  return this.save();
};

module.exports = model('Mentoring', Mentoring);
