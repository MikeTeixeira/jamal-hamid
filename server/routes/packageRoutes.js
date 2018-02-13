const ServicePackages = require('../models/ServicePackages');

module.exports = (app) => {
  app.get("/packages", (req,res) => {
    ServicePackages.find((err, packages) => {
      if (err) {
        res.send(err);
      }
        res.json({message: "Success",
                  packages: packages});
    })
  })

  app.post("/packages", (req,res) => {
    const servicePackage = new ServicePackages();

      servicePackage.name = req.body.name;
      servicePackage.price = req.body.price;
      servicePackage.status = req.body.status;
      servicePackage.currentlySold = req.body.currentlySold;
      servicePackage.maxQuantity = req.body.maxQuantity;
      servicePackage.inStock = req.body.inStock;
      servicePackage.packagesInCart = req.body.packagesInCart;

      servicePackage.save((err, servicePackage) => {
        if(err) {
          res.send(err);
        }
        res.json({message: "Successfully saved"});
      })
  })
}