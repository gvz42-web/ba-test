const {Log} = require('../models')

exports.create = async (id, data) => {
    return Log.create({clientId: id, log: data})
}