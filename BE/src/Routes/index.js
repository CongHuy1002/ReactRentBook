const siteRouter = require('./site');
const authorRouter = require('./author');
const genreRouter = require('./genre');
const userRouter = require('./user');
const cartRouter = require('./cart');
const orderRouter = require('./order');
const adminRouter = require('./admin');
function route(app) {
  app.use('/', siteRouter);
  app.use('/author', authorRouter);
  app.use('/genre', genreRouter);
  app.use('/user', userRouter); //auth
  app.use('/cart', cartRouter);
  app.use('/order', orderRouter);
  app.use('/admin', adminRouter);
}
module.exports = route;
