const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const brandSchema = mongoose.Schema(
  {
    type: {
      type: String,
      default: 'car',
    },
    src: String,
    alt: String,
    description: String,
    id: Number,
    compare: Object,
    faq: Object,
    info: Object,
    models: Array,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
brandSchema.plugin(toJSON);
brandSchema.plugin(paginate);

/**
 * @typedef Brand
 */
const Brand = mongoose.model('Brands', brandSchema);

module.exports = Brand;
