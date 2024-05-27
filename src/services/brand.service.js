const Brand = require('../models/brand.model');

const queryBrands = async (filter, options) => {
  const brands = await Brand.paginate(filter, options);
  return brands;
};

const getBrandById = async (id) => {
  return Brand.findOne({
    _id: id,
  });
};

module.exports = {
  queryBrands,
  getBrandById,
};
