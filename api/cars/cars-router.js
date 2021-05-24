// DO YOUR MAGIC
const express = require("express");
const {
  checkCarId,
  checkVinNumberValid,
  checkCarPayload,
  checkVinNumberUnique,
} = require("./cars-middleware");
const Car = require("./cars-model");

const router = express.Router();

router.get("/", (req, res) => {
  Car.getAll()
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", checkCarId, (req, res, next) => {
  // DO YOUR MAGIC
  Car.getById(req.params.id)
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      next(err);
    });
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  (req, res, next) => {
    // console.log("req body",req.body)
    Car.create(req.body)
      .then((car) => {
        console.log(car);
        res.status(201).json(car);
      })
      .catch((err) => {
        next(err);
      });
  }
);

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;
