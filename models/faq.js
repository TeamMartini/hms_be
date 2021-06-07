const { Schema, model } = require('mongoose');

const Faq = new Schema({
  type: String,
  title: String,
  content: String,
});

Faq.statics.createFaq = function (type, title, content) {
  const faq = new this({
    type, title, content,
  });

  return faq.save();
};

Faq.statics.listFaq = function () { return this.find({}).exec(); };

module.exports = model('Faq', Faq);
