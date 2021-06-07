const { Schema, model } = require('mongoose');

const Board = new Schema({
  title: String,
  contents: String,
  division: String,
  pageNumber: Number,
});

Board.statics.create = function (title, contents, division, pageNumber) {
  const board = new this({
    title,
    contents,
    division,
    pageNumber,
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

module.exports = model('Board', Board);
