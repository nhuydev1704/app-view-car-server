const { Car } = require('../models');

const queryCars = async (filter, options) => {
  console.log('🚀 ~ queryCars ~ options:', options);
  const cars = await Car.paginate(filter, options);
  return cars;
};

module.exports = {
  queryCars,
};
