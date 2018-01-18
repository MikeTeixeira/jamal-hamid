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
      servicePackage.quantity = req.body.quantity;
      servicePackage.description = req.body.description

      servicePackage.save((err, servicePackage) => {
        if(err) {
          res.send(err);
        }
        res.json({message: "Successfully saved"});
      })
  })
}