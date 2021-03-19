var express = require('express');
const User = require('../models/users');
var UserController = require('../controllers/users')
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.users_list);
/* Post users create */
router.post('/', UserController.users_create);
/* Post find email user */
router.get('/:email', UserController.get_by_email);

module.exports = router;
