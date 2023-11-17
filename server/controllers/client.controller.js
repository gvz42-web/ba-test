const { Client, Log } = require('../models')

exports.create = async (socketId) => {
      return Client.create({socketId})
}

exports.delete = async (id) => {
    Client.destroy({
        where: {
            id: id
        }
    })
}

exports.findOne = async (id) => {
    return Client.findByPk(id, {
        include: Log
    })
}

exports.getActive = async () => {
    return Client.findAll()
}

exports.getAll = async () => {
    return Client.findAll({
        paranoid: false
    })
}