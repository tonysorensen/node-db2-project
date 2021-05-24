// DO YOUR MAGIC
const express = require('express')
const { whereNotExists } = require('../../data/db-config')
const Car = require("./cars-model")

const router = express.Router()

router.get('/', (req,res)=>{
    Car.getAll()
    .then((car)=>{
        res.status(200).json(car)
    })
    .catch((err)=>whereNotExists(err))
})

router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack });
  })

  module.exports = router;