const mongoose = require('mongoose');

const bloodStockSchema = new mongoose.Schema({
  bloodGroup: String,
  unit: Number,
});

module.exports = mongoose.model('BloodStock', bloodStockSchema);
