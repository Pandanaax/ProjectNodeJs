var express = require('express');
const User = require('../models/users');
var UserController = require('../controllers/users')
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.users_list);

module.exports = router;
