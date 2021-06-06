const { Schema, model } = require('mongoose');

const Room = new Schema({
  name: String,
  floor: Number,
  capacity: Number,
});

Room.statics.create = function (name, floor, capacity) {
  const room = new this({
    name,
    floor,
    capacity,
  });

  return room.save();
};

Room.statics.findOneByName = function (name) {
  return this.findOne({
    name,
  }).exec();
};

Room.statics.listRooms = function () {
  return this.find({}).exec();
};

module.exports = model('Room', Room);
