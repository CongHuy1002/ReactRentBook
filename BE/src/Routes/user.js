const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');
const verifyController = require('../app/middlewares/verifyController');
router.post('/register', userController.registerUsers);
router.post('/login', userController.loginUsers);
<<<<<<< HEAD
router.post(
  '/logout',
  verifyController.verifyToken,
  userController.userLogout,
);
router.get('/getAllUser', userController.getAllUsers);

//* Forget password
router.get('/forgetPasswordform', userController.forgetPasswordform)
router.post('/forgot-password', userController.forgotPassword);
router.get('/reset-password/:id/:token', userController.resetPassword)
router.post('/reset-password/:id/:token', userController.postResetPassword)

module.exports = router;
=======
router.post('/logout', verifyController.verifyToken, userController.userLogout);
router.get('/getAllUser', userController.getAllUsers);

//* Forget password
router.get('/forgetPasswordform', userController.forgetPasswordform);
router.post('/forgot-password', userController.forgotPassword);
router.get('/reset-password/:id/:token', userController.resetPassword);
router.post('/reset-password/:id/:token', userController.postResetPassword);

module.exports = router;
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
