const express = require('express');
const { carController } = require('../../controllers');

const router = express.Router();

router.route('/').get(carController.getCars);

router.route('/:carId').get(carController.getCar);
router.route('/spec/:carId').get(carController.getCarSpec);
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
