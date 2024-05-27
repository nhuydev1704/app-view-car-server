const express = require('express');
const { brandController } = require('../../controllers');

const router = express.Router();

router.route('/').get(brandController.getBrands);

router.route('/:brandId').get(brandController.getBrand);
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
