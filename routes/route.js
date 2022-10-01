const express = require('express');
const usersControllers = require('../controllers/users.controller');
const limiter = require('../middleware/limiter');
const viewCount = require('../middleware/viewCount');
const router = express.Router();


router.route('/random').get(usersControllers.random)

router
    .route('/all')
    .get(usersControllers.getAllUsers)
    .post(usersControllers.saveUser)

router
    .route('/:id')
    .get(viewCount, limiter, usersControllers.getUserDetail)
    .patch(usersControllers.updateUser)
    .delete(usersControllers.deleteUser)


module.exports = router;