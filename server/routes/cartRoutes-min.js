
const UserCartSession = require('../models/UserCartSession');
const ServicePackage = require('../models/ServicePackages');

module.exports = (app) => {

  //Grabs all related cart items from the UserSessionDatabase

  app.get('/cart/checkout', (req,res) => {

    let cartSessionQuery = {sessionId: req.sessionId};

    UserCartSession.findOne(cartSessionQuery, function(error, cartItems){
      if(error){
        res.send(err);
      }
      const filteredCart = cartItems.filter(cartItem => {
        return cartItem.sessionId === req.sessionID
      })
      res.json({
        message: "Success",
        items: filteredCart
      })
    });
  });










//---------------------ADDS ITEM TO CART-----------------//

  app.post('/cart/checkout', (req,res) => { 

    //creates cart session or uses an existing session
    req.session.cart = req.session.cart || {};
    let cart = req.session.cart;


    // console.log(req);

    //Grab our productID
    let packageId = req.body._id;
    let servicePackageQuery = {'_id': packageId};

    //Finds product in database and return a callback function
    ServicePackage.findOne(servicePackageQuery, function(err, servicePackage){

      // console.log(servicePackage)

      if(err){
        res.send(err);
      }

      //Find cart by the packageId and increase quantity in session
      if(cart[packageId]){
        cart[packageId].quantity++;


        //Find our CartSession in the database and update the quantity
        let cartSessionQuery = {sessionId: req.sessionID, packageId: req.body._id};

        UserCartSession.findOne(cartSessionQuery, function(err, cartSessionFound){
          if(err){
            res.send(err);
          }

          // console.log(cartSessionFound);
          
          //Save our cartSession after updating
          if(cartSessionFound){

            cartSessionFound.quantity++;

            cartSessionFound.save().then(function(updatedCart){

              servicePackage.packagesInCart++;
              servicePackage.save(function(error, updatedPackage){
                if(error){
                  res.send(error);
                }

                res.json({message: "successfully updated both cart and package", 
                          updatedCart: updatedCart, 
                          updatedPackage: updatedPackage})
            })
          })
        }
      })

        //Create a new cart session/database entry if no cart session is found
      } else {

        cart[packageId] = {
          name: servicePackage.name,
          price: servicePackage.price,
          quantity: 1,
          packageId: servicePackage._id
        }

          var cartSession = new UserCartSession();

          cartSession.name = req.body.name;
          cartSession.price = req.body.price;
          cartSession.quantity = req.body.quantity;
          cartSession.packageId = req.body._id;
          cartSession.status = req.body.status;
          cartSession.sessionId = req.sessionID;

            cartSession.save().then(function(cartSession){

              //update the packages in cart in database
              //packages in cart have an unlimited value
              //users can continue to add the packages
              //packages only effected if user completes purchase

              servicePackage.packagesInCart++;

              servicePackage.save(function(error, updatedPackage){
                if(error){
                  res.send(error);
                  console.log("error saving package");
                }
              res.json({message: "Successfully saved",
                      data: cartSession,
                      updatedPackage: updatedPackage,
                      
            })
          })          
        });   
      }
    });
  });










  //---------------UPDATES CART SESSION ------------//

  app.put('/cart/checkout', (req,res) => {

      const packageId = req.body.packageId;
      const quantity = req.body.quantity;
      const cart = req.session.cart;

    //Find our cart through the session id and the matching package Id
      const cartSessionQuery = {sessionId: req.sessionID, packageId: packageId};
      const servicePackageQuery = {"_id": packageId};

      //If a cart is found, updates current cart
      if(cart){
        cart[packageId] = {
          name: req.body.name,
          price: req.body.price,
          packageId: req.body.packageId,
          quantity: quantity
        }

          //Find our matching cart
          UserCartSession.findOne(cartSessionQuery, function(error, cartSessionFound){
            if(error){
              res.send(error)
            };

            //Update the cart quantity from the incoming request
            cartSessionFound.quantity = Number(quantity);

            cartSessionFound.save(function(error, updatedPackage){
                if(error){
                  res.send(error);
                }

                res.json({message: "Successfully updated cart"
              })
            })
          })
        
        } else {
          console.log("error updating cart");
        }
      }) 










//---------------------DELETE ITEM FROM CART AND DATABASE ----------//

  app.delete('/cart/checkout', (req,res)=> {

    //Grab our package Id from request
    const packageId = req.body.itemToRemove.packageId

    //Query our cart 
    const cartSessionQuery = {sessionId: req.sessionID, packageId: packageId};

    //Delete the cart in our session
    delete req.session.cart[packageId]

      // Find our userPackage database and remove it from the cart
      UserCartSession.remove(cartSessionQuery, (error) => {
        if(error){
          res.send(error);
          console.log("could not delete product from cart");
        }

        res.json({message: "successfully removed from your cart"});
      })
  })
}
  

