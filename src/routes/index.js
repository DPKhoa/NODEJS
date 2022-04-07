const homeRouter = require('./home');
const menuRouter = require('./menu');
const cartRouter = require('./shoppingcart');


function route(app) {
   app.use('/', homeRouter);
   app.use('/menu',menuRouter);
   app.use('/cart',cartRouter);
}

module.exports = route;