const { Schema, model } = require('mongoose');

const Room = new Schema({
  mac_address: String,
  count: Number,
  _msgid: String,
});

Room.statics.find = function () {
  return this.findOne({}).exec();
};

const rooms = [];
for (let i = 0; i < 8; i += 1) {
  rooms.push(model(`Room_0${i}`, Room, `room_${i}`));
}

module.exports = rooms;
