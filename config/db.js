const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movies')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

module.exports = mongoose;