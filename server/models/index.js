const Client = require("../models/client.model")
const Log = require("../models/log.model")

Client.hasMany(Log)
Log.belongsTo(Client)

module.exports = {
    Client,
    Log
}