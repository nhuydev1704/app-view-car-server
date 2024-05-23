const { Car, CarDetail } = require('../models');

const queryCars = async (filter, options) => {
  const cars = await Car.paginate(filter, options);
  return cars;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getCarById = async (id) => {
  return CarDetail.findOne({
    'detail.id': +id,
  });
};

module.exports = {
  queryCars,
  getCarById,
};
