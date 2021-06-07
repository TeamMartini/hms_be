const { Schema, model } = require('mongoose');

const Suggest = new Schema({
  title: String,
  contact: String,
  file: String,
  content: String,
  checked: Boolean,
});

Suggest.statics.create = function (title, contact = '', file = '', content = '') {
  const suggest = new this({
    title,
    contact,
    file,
    content,
    checked: false,
  });
  return suggest.save();
};

Suggest.statics.listSuggest = function (check = 0) {
  const query = {};
  if (check !== 0) {
    query.checked = check === 1;
  }
  return this.find(query).exec();
};
