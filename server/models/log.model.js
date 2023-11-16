const Sequelize = require("sequelize")
const sequelize = require("../db/db")

module.exports = sequelize.define("log", {
  clientId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'clients',
      key: 'id'
    }
  },
  log: {
    type: Sequelize.STRING
  }
}, {
  updatedAt: false
});
