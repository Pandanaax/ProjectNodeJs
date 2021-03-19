var mongoose = require('mongoose');
var User = require('./users');
/* Connect to dabase */
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};
/* Call user in the models */
const models = { User };
/* export connectDB to index.js */
module.exports = { models, connectDb };
