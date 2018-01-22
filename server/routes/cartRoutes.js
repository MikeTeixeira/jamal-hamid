
const UserCartSession = require('../models/UserCartSession');

module.exports = (app) => {

  app.get('/cart/checkout', (req,res) => {
    UserCartSession.find((error, cartItems) => {
      if(error){
        res.send(err);
      }
      const filteredCart = cartItems.filter(cartItem => {
        return cartItem.sessionId === req.sessionID
      })
      res.json({
        message: "Success",
        items: filteredCart
      });
    });
  });


  app.post('/cart/checkout', (req,res) => {
    var cartSession = new UserCartSession();

    cartSession.name = req.body.name;
    cartSession.price = req.body.price;
    cartSession.quantity = req.body.quantity;
    cartSession.status = req.body.status;
    cartSession.sessionId = req.sessionID;

    cartSession.save((error, cartSession) => {
      if(error){
        res.send(error);
      }

      res.json({message: "Successfully saved",
              data: cartSession
              });
    });
  });
};