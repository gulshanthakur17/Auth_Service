const express = require('express');

const UserController = require('../../controllers/user-controller');
const { AuthRequestValidators } = require('../../middlewares/index');

const router = express.Router();

router.post(
    '/signup',
    AuthRequestValidators.ValidateUserAuth,
    UserController.create);
router.post(
    '/signin', 
    AuthRequestValidators.ValidateUserAuth,
    UserController.signIn);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);

router.get(
    '/isAdmin',
    AuthRequestValidators.validateIsAdminRequest,
    UserController.isAdmin   
)

module.exports = router;