const express = require('express');
const { carController } = require('../../controllers');

const router = express.Router();

router.route('/').get(carController.getCars);

router.route('/:carId').get(carController.getCar);
router.route('/list/:brandId').get(carController.getCarByBrand);
router.route('/spec/:carId').get(carController.getCarSpec);

router.route('/gust/wish').get(carController.getWishCar);

//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
