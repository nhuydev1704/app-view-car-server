const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const homeRoute = require('./home.route');
const brandRoute = require('./brand.route');
const carRoute = require('./car.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/home',
    route: homeRoute,
  },
  {
    path: '/brand',
    route: brandRoute,
  },
  {
    path: '/car',
    route: carRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
