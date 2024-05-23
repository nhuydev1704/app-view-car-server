const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const carDetailSchema = mongoose.Schema(
  {
    car_id: mongoose.Schema.Types.ObjectId,
    detail: Object,
    picture: Array,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
carDetailSchema.plugin(toJSON);

/**
 * @typedef CarDetail
 */
const CarDetail = mongoose.model('carDetail', carDetailSchema);

module.exports = CarDetail;
