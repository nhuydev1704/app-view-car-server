const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const homeSchema = mongoose.Schema(
  {
    type: {
      type: String,
      default: 'car',
    },
    common: Array,
    recommend_category_cars: Array,
    recommend_cars: Array,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
homeSchema.plugin(toJSON);

/**
 * @typedef Home
 */
const Home = mongoose.model('Homes', homeSchema);

module.exports = Home;
