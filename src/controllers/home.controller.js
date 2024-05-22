const catchAsync = require('../utils/catchAsync');
const { Home } = require('../models');

const getHome = catchAsync(async (req, res) => {
  const result = await Home.find().select('recommend_category_cars');
  res.send(result[0]);
});

module.exports = {
  getHome,
};
