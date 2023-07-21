const express = require('express');
const controller = require('./home.controller');

const router = express.Router();

router.get('/', controller.get);

module.exports = {
  path: '/',
  router,
};
