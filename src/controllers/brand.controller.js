const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { brandService } = require('../services');

const getBrands = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await brandService.queryBrands(filter, options);
  res.send(result);
});

module.exports = {
  getBrands,
};
