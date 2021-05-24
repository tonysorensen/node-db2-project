const Car = require ('./cars-model')

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await Car.getById(req.params.id);

    if (car) {
      res.locals.car = car;
      console.log(car)
      next();
    } else {
      res.status(404).json({ message: `car with id ${car} not found` });
    }
  } catch(e) { next(e) }

}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = checkCarId