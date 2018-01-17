const TrainingPackages = require('../models/TrainingPackages');

module.exports = (app) => {
  app.get("/packages", (req,res) => {
    TrainingPackages.find((err, packages) => {
      if (err) {
        res.send(err);
      }
        res.json({message: "Success",
                  packages: packages});
    })
  })

  app.post("/packages", (req,res) => {
    const trainingPackage = new TrainingPackages();

      trainingPackage.name = req.body.name;
      trainingPackage.price = req.body.price;
      trainingPackage.status = req.body.status;
      trainingPackage.quantity = req.body.quantity;

      trainingPackage.save((err, trainingPackage) => {
        if(err) {
          res.send(err);
        }
        res.json({message: "Successfully saved"});
      })
  })
}