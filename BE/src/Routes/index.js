const siteRouter = require('./site');
const authorRouter = require('./author');
<<<<<<< HEAD
const genreRouter = require('./genre');
=======
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
const userRouter = require('./user');
const cartRouter = require('./cart');
const orderRouter = require('./order');
const adminRouter = require('./admin');
<<<<<<< HEAD
function route(app) {
  app.use('/', siteRouter);
  app.use('/author', authorRouter);
  app.use('/genre', genreRouter);
  app.use('/user', userRouter); //auth
=======
const genreRouter = require('./genre');
function route(app) {
  app.use('/', siteRouter);
  app.use('/author', authorRouter);
  app.use('/user', userRouter); //auth
  app.use('/genre', genreRouter);
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
  app.use('/cart', cartRouter);
  app.use('/order', orderRouter);
  app.use('/admin', adminRouter);
}
module.exports = route;
