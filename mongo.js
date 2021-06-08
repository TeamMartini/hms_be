const mongoose = require('mongoose');

let db = null;

function mongo() {
  if (db !== null) return db;
  mongoose.connect('mongodb://hms:,mNd<5R,a6[h!c[m@live.esllo.com:27017/?authSource=hms', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = mongoose.connection;
  db.on('error', console.error);
  db.once('open', () => {
    console.log('mongodb connected');
  });
  return db;
}

module.exports = mongo;
