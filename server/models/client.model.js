const Sequelize = require("sequelize")
const sequelize = require("../db/db")

const clients = sequelize.define("client", {
  socketId: {
    type: Sequelize.STRING
  }
}, {
    paranoid: true
});

module.exports = clients


