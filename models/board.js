const { Schema, model } = require('mongoose');

const Board = new Schema({
  title: String,
  contents: String,
  division: String,
  postNumber: {
    type: Number,
    default: 1,
  },
});

Board.statics.create = function (title, contents, division) {
  const board = new this({
    title,
    contents,
    division,
  });

  return board.save();
};

Board.statics.findOneByTitle = function (title) {
  return this.findOne({
    title,
  }).exec();
};

Board.statics.listBoard = function () {
  return this.find({}).exec();
};

Board.methods.assignNumber = async function (number) {
  this.postNumber = number;
  await this.save();
  return number;
};

module.exports = model('Board', Board);
