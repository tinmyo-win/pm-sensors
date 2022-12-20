module.exports = app => {
  const sensors = require("../controllers/sensors.controller.js");

  var router = require("express").Router();

  router.get("/", sensors.findAll);
  router.post("/", sensors.create);
  router.get("/export", sensors.getPdf);

  app.use('/api/sensors', router);
};