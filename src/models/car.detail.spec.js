const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const carDetailSpecSchema = mongoose.Schema(
  {
    car_id: mongoose.Schema.Types.ObjectId,
    detail: Object,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
carDetailSpecSchema.plugin(toJSON);

/**
 * @typedef CarDetailSpec
 */
const CarDetailSpec = mongoose.model('carDetailSpec', carDetailSpecSchema);

module.exports = CarDetailSpec;
