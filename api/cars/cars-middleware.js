const Car = require("./cars-model");
const vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await Car.getById(req.params.id);
    // console.log(car);
    if (car) {
      res.locals.car = car;
      // console.log(car);
      next();
    } else {
      res.status(404).json({ message: `car with id ${car} not found` });
    }
  } catch (e) {
    next(e);
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.make) {
    res.status(400).json({
      message: "make is missing",
    });
  } else if (!req.body.model) {
    res.status(400).json({
      message: "model is missing",
    });
  } else if (!req.body.vin) {
    res.status(400).json({
      message: "vin is missing",
    });
  } else if (!req.body.mileage) {
    res.status(400).json({ message: "mileage is missing" });
  } else next();
};
const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const validVin = vinValidator.validate(req.body.vin);
  if (validVin) {
    next();
  } else {
    res.status(400).json({ message: `vin ${req.body.vin} is invalid` });
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const uniqueVin = await Car.getByVin(req.body.vin);
    console.log("unique", uniqueVin);
    if (uniqueVin) {
      res.locals.vin = uniqueVin;
      next();
    } else {
      res.status(400).json({ message: `vin ${req.body.vin} already exists` });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  checkCarId,
  checkVinNumberValid,
  checkCarPayload,
  checkVinNumberUnique,
};
