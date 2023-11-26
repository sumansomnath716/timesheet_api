const express = require('express');
const { getUsers,userAddEdit } = require('../controllers/userController');

const router = express.Router();

router.get('/users', getUsers);
router.post('/user_add_edit', userAddEdit);


module.exports = {
                    routes: router
};
