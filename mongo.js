const mongoose = require('mongoose');

let db = null;

function mongo() {
  if (db !== null) return db;
  mongoose.connect(process.env.PRODUCTION_MONGO_DB, {
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
