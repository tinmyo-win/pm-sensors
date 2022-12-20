const db = require("../models");
const Sensor = db.sensors;
const PDFDocument = require('pdfkit')

exports.create = (req, res) => {

  if (!req.body.long || !req.body.lang || !req.body.pm) {
    res.status(400).send({
      message: "Long lang and pm can not be empty!"
    });
    return;
  }

  const sensor = {
    long: req.body.long,
    lang: req.body.lang,
    pm: req.body.pm,
    date: new Date(),
  };

  Sensor.create(sensor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sensor."
      });
    });
};


exports.findAll = (req, res) => {

  Sensor.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sensors."
      });
    });
};

exports.getPdf = (req, res) => {
  Sensor.findAll()
    .then(data => {
      const doc = new PDFDocument();

      // Add the data to the PDF
      data.forEach((row) => {
        doc.text('Sensor' + row.id + ' : lattitude ' + row.long + ' : longitude ' + row.lang + ' : pm '  + row.pm);
      });
  
      // Set the response to be a PDF
      res.setHeader('Content-Type', 'application/pdf');
  
      // Send the PDF to the client
      doc.pipe(res);
      doc.end();
    })
}

