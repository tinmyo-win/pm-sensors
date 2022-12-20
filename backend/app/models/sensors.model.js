module.exports = (sequelize, Sequelize) => {
  const Sensor = sequelize.define("sensor", {
    long: {
      type: Sequelize.FLOAT
    },
    lang: {
      type: Sequelize.FLOAT
    },
    pm: {
      type: Sequelize.FLOAT
    },
    date: {
      type: Sequelize.DATE
    }
  });

  return Sensor;
};