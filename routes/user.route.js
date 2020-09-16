const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// userController.index();
router.get('/show', userController.show);
router.get('/', userController.index);
router.post('/', userController.add);


module.exports = router;