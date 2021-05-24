const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db("cars").where({ id }).first();
}

const create = (car) => {
  // DO YOUR MAGIC
  // const [id] = db.insert(car);

  // return getById(id)
  return db('cars').insert(car)
  
}

module.exports = {
  getAll,
  getById,
  create,
}