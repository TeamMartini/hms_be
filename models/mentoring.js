const { Schema, model } = require('mongoose');

const Mentoring = new Schema({
  roomNumber: Number,
  lender: String,
  capacity: Number,
  rentalTime: String,
  date: String,
});

Mentoring.statics.create = async function (lender, roomNumber, capacity, date, rentalTime) {
  const count = await this.count({ lender }).exec();
  if (count >= 3) {
    throw Error('대여는 3개까지만 가능합니다');
  }
  const mentoring = new this({
    lender,
    roomNumber,
    date,
    capacity,
    rentalTime,
  });

  return mentoring.save();
};

Mentoring.statics.findByDate = function (date, roomNumber) {
  return this.find({ date, roomNumber }).exec();
};

Mentoring.statics.findByLender = function (lender) {
  return this.find({ lender }).exec();
};

Mentoring.statics.listReservation = function () {
  return this.find({}).exec();
};

Mentoring.statics.deleteByDate = function (date, roomNumber, lender, rentalTime) {
  return this.deleteOne({
    date, roomNumber, lender, rentalTime,
  }).exec();
};

module.exports = model('Mentoring', Mentoring);
