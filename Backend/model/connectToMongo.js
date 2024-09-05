const mongoose = require("mongoose");
const connectTOMongo = (url) => {
  return mongoose.connect(url);
};

module.exports = connectTOMongo;
