const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const carSchema = mongoose.Schema(
  {
    brand_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brands',
    },
    model: String,
    detail: Object,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
carSchema.plugin(toJSON);
carSchema.plugin(paginate);

/**
 * @typedef Car
 */
const Car = mongoose.model('Cars', carSchema);

module.exports = Car;
