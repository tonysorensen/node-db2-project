const express = require("express");

const server = express();

// DO YOUR MAGIC
const carsRouter = require("./cars/cars-router");
server.use(express.json());

server.use("/api/cars",  carsRouter);
// function logger(req, res, next) {
//   console.log(`${req.method} request made to ${req.originalUrl}`);
//   next();
// }
module.exports = server;
