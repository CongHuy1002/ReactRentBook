const express = require('express');
const cartController = require('../app/controllers/cartController');
const verifyController = require('../app/middlewares/verifyController');
const orderController = require('../app/controllers/orderController');
const router = express.Router();

router.post('/addcart', verifyController.verifyToken, cartController.addCart);
router.get('/', verifyController.verifyToken, cartController.getCart);
router.post('/postcart', verifyController.verifyToken, cartController.postCart);
<<<<<<< HEAD
router.post('/deleteCartItem',verifyController.verifyToken, cartController.deleteItemsCart);
=======
router.post('/deleteCartItem', cartController.deleteItemsCart);
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
router.post('/create_payment_url', cartController.postPaymentUrl);

//*VNPAY
router.get('/vnpay_return', orderController.vnPayReturn);
<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
