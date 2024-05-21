const Brand = require('../models/brand.model');

const queryBrands = async (filter, options) => {
  const brands = await Brand.paginate(filter, options);
  return brands;
};

module.exports = {
  queryBrands,
};
