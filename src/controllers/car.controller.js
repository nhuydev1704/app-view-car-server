const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { carService } = require('../services');

const getCars = catchAsync(async (req, res) => {
  const filter = pick(req.query, [
    'name',
    'detail_state',
    'detail_priceInfo_minPrice',
    'detail_priceInfo_maxPrice',
    'detail_saleState',
    'detail_hotState',
  ]);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const filterNew = Object.keys(filter).reduce((acc, key) => {
    const newKey = key.replace(/_/g, '.');
    acc[newKey] = filter[key];
    return acc;
  }, {});
  const result = await carService.queryCars(filterNew, {
    ...options,
    // sortBy: 'detail.addVariantTime:asc',
  });
  res.send(result);
});

module.exports = {
  getCars,
};
